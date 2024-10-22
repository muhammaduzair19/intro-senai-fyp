// src/layouts/Layout.jsx
import React from "react";
import Footer from "../components/footer"; // Ensure correct casing
import Navbar from "../components/navbar"; // Ensure correct casing
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className="overflow-hidden bg-white w-full min-h-screen font-poppins">
            <Navbar />
            <Outlet /> {/* This renders the matched child routes */}
            <Footer />
        </main>
    );
};

export default Layout;
