import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/homepage/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { staleTime: 1000 * 60, refetchOnWindowFocus: false },
    },
});

const Layout = () => {
    return (
        <div className="w-full min-h-screen font-poppins">
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Outlet />
                <Footer />
            </QueryClientProvider>
        </div>
    );
};

export default Layout;
