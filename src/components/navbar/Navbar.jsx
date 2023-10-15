import React, { useState } from "react";

import logo from "../../assets/logo.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const options = [
    { title: "Solutions", type: "select" },
    { title: "Features", type: "select" },
    { title: "Blogs", type: "button" },
    { title: "About", type: "select" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className={`${
                open ? "h-[400px] p-2" : "h-[85px]"
            } w-full lg:h-[85px] shadow-md flex items-center justify-center flex-col lg:flex-row bg-transparent overflow-hidden transition-all duration-300 z-50 backdrop-blur-md lg:fixed px-16 lg:px-24`}
        >
            {/* left part */}
            <div className={`logo w-full flex items-start lg:hidden ${open?"hidden":""}`}>
                    <img src={logo} alt=""  />
                </div>
            <button
                className="block lg:hidden absolute bottom-6 right-4"
                onClick={() => setOpen((prev) => !prev)}
            >
                {open?<CloseIcon fontSize="large" />:<MenuIcon fontSize="large" />}
            </button>
            <div className={`flex-1 flex-col lg:flex-row items-center justify-start gap-3 ${open?"flex":"hidden lg:flex"}`}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {options.map((option, key) =>
                    option.type === "button" ? (
                        <button key={key} className="text-lg">
                            {option.title}
                        </button>
                    ) : (
                        <div key={key} className="relative p-3 cursor-pointer">
                            <label className="text-lg cursor-pointer">
                                {option.title}
                            </label>
                            <ul className="hidden">
                                <li value="test"></li>
                                <li value="test"></li>
                                <li value="test"></li>
                            </ul>
                            <div className="arrow absolute -right-2 top-1/2 -translate-y-1/2">
                                <KeyboardArrowDownIcon fontSize="small" />
                            </div>
                        </div>
                    )
                )}
            </div>
            {/* right part */}
            <div className={`items-center flex-col lg:flex-row justify-center gap-2 ${open?"flex":"hidden lg:flex"}`}>
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
