// import { useState, } from 'react'
// import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import { Box } from '@mui/material';
// import * as styles from './styles/App'
// import Sidebar from './components/Sidebar';
// import Overview from './pages/Overview';
// import Transactions from './pages/Transactions'
// import Budget from './pages/Budget'
// import Goals from './pages/Goals'
// import Reports from './pages/Reports'
// import Debts from './pages/Debts'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Box sx={styles.background}> 
//       <Sidebar />
      
//         <Routes>
//           <Route path="/" element={<Overview/>}/>
//           <Route path="/transactions" element={<Transactions/>}/>
//           <Route path="/budget" element={<Budget/>}/>
//           <Route path="/goals" element={<Goals/>}/>
//           <Route path="/reports" element={<Reports/>}/>
//           <Route path="/debts" element={<Debts/>}/>
//         </Routes>
//       </Box>
//   )
// }

// export default App


import React, { useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

function App() {
  const [linkToken, setLinkToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  // 1. Fetch link_token from Flask backend on page load
  useEffect(() => {
    fetch('http://localhost:5000/api/create_link_token', { method: 'POST' })
      .then(res => res.json())
      .then(data => setLinkToken(data.link_token));
  }, []);

  // 2. Handle successful public token generation from Plaid Link
  const onSuccess = useCallback((public_token, metadata) => {
    fetch('http://localhost:5000/api/exchange_public_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ public_token }),
    })
      .then(res => res.json())
      .then(data => {
        setAccessToken(data.access_token);
        console.log("Access Token acquired:", data.access_token);
      });
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess,
  });

  return (
    <div style={{ padding: '40px' }}>
      <h1>Plaid + React + Flask</h1>
      {accessToken ? (
        <p>Success! Account linked. Access Token: {accessToken}</p>
      ) : (
        <button onClick={() => open()} disabled={!ready}>
          Connect Bank Account
        </button>
      )}
    </div>
  );
}

export default App;