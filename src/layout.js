import React from 'react';
import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";


const Layout = ({ children }) => {
    console.log("layout mei")
    return (
        <div>
            <Navbar />
            
            <main>{children}</main>
        </div>
    );
};

export default Layout;