import os
from pathlib import Path
from flask import Flask, jsonify, request
from flask_cors import CORS
import plaid
from plaid.api import plaid_api
from plaid.model.link_token_create_request import LinkTokenCreateRequest
from plaid.model.link_token_create_request_user import LinkTokenCreateRequestUser
from plaid.model.products import Products
from plaid.model.country_code import CountryCode
from plaid.model.item_public_token_exchange_request import ItemPublicTokenExchangeRequest
from dotenv import load_dotenv

import json

env_path = Path(__file__).resolve().parent

load_dotenv(dotenv_path=env_path)

app = Flask(__name__)
CORS(app)

print("CLIENT ID:", os.getenv('PLAID_CLIENT_ID'))
print("SECRET:", os.getenv('PLAID_SECRET')[:5] if os.getenv('PLAID_SECRET') else "None")

# Configure Plaid client
configuration = plaid.Configuration(
    host=plaid.Environment.Sandbox,  # Change to Development or Production later
    api_key={
        "clientId": os.getenv("PLAID_CLIENT_ID"),
        "secret": os.getenv("PLAID_SECRET"),
    }
)
api_client = plaid.ApiClient(configuration)
client_plaid = plaid_api.PlaidApi(api_client)

print("configuration:", type(configuration))
print("client_plaid:", type(client_plaid)) 
print("configuration:", type(configuration))
print("api_client:", type(api_client))
print("client_plaid.api_client:", type(client_plaid.api_client))

@app.route("/api/create_link_token", methods=["POST"])
def create_link_token():
    try:
        request_obj = LinkTokenCreateRequest(
            products=[Products("auth"), Products("transactions")],
            client_name="My React Flask App",
            country_codes=[CountryCode("US")],
            language="en",
            user=LinkTokenCreateRequestUser(client_user_id="unique-user-id")
        )
        response = client_plaid.link_token_create(request_obj)
        return jsonify(response.to_dict())
    except plaid.ApiException as e:
        return jsonify({"error": e.body}), 500

@app.route("/api/exchange_public_token", methods=["POST"])
def exchange_public_token():
    data = request.get_json()
    public_token = data.get("public_token")
    try:
        exchange_request = ItemPublicTokenExchangeRequest(public_token=public_token)
        exchange_response = client_plaid.item_public_token_exchange(exchange_request)
        # Save exchange_response['access_token'] securely in your database!
        return jsonify({"access_token": exchange_response['access_token'], "item_id": exchange_response['item_id']})
    except plaid.ApiException as e:
        return jsonify({"error": e.body}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)