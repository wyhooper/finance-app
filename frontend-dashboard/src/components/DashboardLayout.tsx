import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar />

            <Box sx={{ flex: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}