import React from "react";

import logo from "../../assets/logo.png";

const options = [
    { title: "Solutions", type: "select" },
    { title: "Features", type: "select" },
    { title: "Blogs", type: "button" },
    { title: "About", type: "select" },
];

const Navbar = () => {
    return (
        <nav className="w-full h-[85px] flex bg-transparent z-50 backdrop-blur-md sticky px-16 lg:px-24">
            {/* left part */}
            <div className="flex-1 flex items-center justify-start gap-2">
                <div className="logo bg-black">
                    <img src={logo} alt="" />
                </div>
                {options.map((option, key) =>
                    option.type === "button" ? (
                        <button key={key}>{option.title}</button>
                    ) : (
                        <div key={key} className="relative p-3 cursor-pointer">
                            <label className="text-lg cursor-pointer" htmlFor={option.title}>{option.title}</label>
                            <ul className="hidden">
                                <li value="test"></li>
                                <li value="test"></li>
                                <li value="test"></li>
                            </ul>
                            <div className="arrow absolute right-0 top-1/2 -translate-y-1/2">
                                ^
                            </div>
                        </div>
                    )
                )}
            </div>
            {/* right part */}
            <div className="flex items-center justify-center gap-2">
                <div className="btn1">
                    <button className="btn-outline">Login</button>
                </div>
                <div className="btn2">
                    <button className="btn-fill">Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
