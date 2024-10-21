import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LandingPage from "../pages/landing-page";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <main className="overflow-hidden bg-white w-full min-h-screen font-poppins">
            <Navbar />
            <Outlet />
            {/* <LandingPage /> */}
            <Footer />
        </main>
    );
};

export default Layout;
