import React from "react";

import logo from "../../assets/logo.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const footerlists = [
    {
        title: "COMPANY",
        items: ["About", "Pricing", "Careers"],
    },
    {
        title: "SOLUTIONS",
        items: ["Search", "Connect", "Research", "Academy"],
    },
    {
        title: "RESOURCES",
        items: ["Blogs", "Forms"],
    },
    {
        title: "SUPPORT",
        items: ["Help", "Contact Us"],
    },
    {
        title: "LEGAL",
        items: ["Privacy", "Terms", "Accessibility"],
    },
];

const Footer = () => {
    return (
        <>
        <footer
            id="footer"
            className="h-max sm:h-[400px] w-full px-10 py-6 sm:px-16 sm:py-10 footerGradient relative font-sans"
        >
            <div className="flex flex-col lg:flex-row gap-2 text-white">
                <div className="flex-[2]">
                    <img src={logo} alt="logo" />
                    <p>
                        India's first platform dedicated to simplifying partner
                        search
                    </p>
                </div>
                {/* lists */}
                <div className="flex-[4] flex flex-wrap gap-2">
                    {footerlists.map((list, ind) => (
                        <div className="flex-1 flex flex-col gap-2" key={ind}>
                            <label
                                htmlFor={list.title}
                                className="font-bold text-sm"
                            >
                                {list.title}
                            </label>
                            <ul>
                                {list.items.map((item, ind) => (
                                    <li key={ind} className="font-thin p-1">
                                        <a href="#footer">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* links */}
            <div className="border-t-2 py-4 flex text-white text-sm font-light">
                <div className="flex-1">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</div>
                <div className="flex">
                    <ul className="flex gap-2">
                        <li><a href="#footer"><FacebookIcon fontSize="small" /></a></li>
                        <li><a href="#footer"><InstagramIcon fontSize="small" /></a></li>
                        <li><a href="#footer"><LinkedInIcon fontSize="small" /></a></li>
                        <li><a href="#footer"><WhatsAppIcon fontSize="small" /></a></li>
                    </ul>
                </div>
            </div>
            {/* trademark */}
        </footer>
            <div className="bg-black text-white text-xs font-light h-[57px] w-full text-center flex items-center justify-center">
                Registered trademark of India Private Limited © 2023 loerumipsum
                Inc. All Rights Reserved
            </div>
            </>
    );
};

export default Footer;
