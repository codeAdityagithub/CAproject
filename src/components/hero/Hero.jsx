import React from "react";
import SearchBar from "../search/SearchBar";

const Hero = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            {/* left part */}
            <div className="flex-1 flex flex-col items-start gap-8 lg:gap-2 px-8 justify-center">
                <h1 className="heading text-center lg:text-left">
                    Find <span className="heroGradientText">Partners</span> (CAs) available online
                </h1>
                <p className="textShadow text-center lg:text-left">
                    CONNECT with us where your services are listed and visible
                    to a myriad of businesses seeking CA’s for compliance
                    support
                </p>
                <SearchBar />
            </div>
            {/* right part */}
            <div className="flex-1 hidden lg:flex items-center justify-center  h-[487px]">
                <div className="flex h-full items-end">
                    <img src="/hero2.png" alt="image2" />
                </div>
                <div className="flex h-full items-start">
                    <img src="/hero3.png" alt="image3" />
                </div>
                <div className="flex h-full items-center">
                    <img src="/hero1.png" alt="image1" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
