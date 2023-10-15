import React from "react";
import Hero from "../components/hero/Hero";
import Page2 from "../components/homepage/Page2";
import Page3 from "../components/homepage/Page3";

const Home = () => {
    return <div className="h-full">
        <Hero />
        <Page2 />
        <Page3 />
    </div>;
};

export default Home;
