import React from "react";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const Page2 = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                {/* left container */}
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="heading leading-[97px] text-left w">
                        <span className="heroGradientText">
                            All-in-One platform
                        </span>{" "}
                        that Makes Easier
                    </h1>
                    <p className="text-[24px] text-left">
                        We are more than a platform; We are your success
                        partner. Discover our services to achieve your business
                        and educational goals
                    </p>
                    {/* cards */}
                    <div className="cards flex items-center justify-start flex-wrap w-full">
                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img src={icon1} alt="search icon" className="" />
                            <p className="text-xl text-left w-[205px]">
                                <span className="font-bold">SEARCH</span> for
                                vital company information
                            </p>
                        </div>

                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img src={icon2} alt="search icon" className="" />
                            <p className="text-xl text-left w-[205px]">
                                <span className="font-bold">CONNECT</span> with
                                the resources to meet your business needs
                            </p>
                        </div>

                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img src={icon3} alt="search icon" className="" />
                            <p className="text-xl text-left w-[205px]">
                                <span className="font-bold">RESEARCH</span> and
                                generate reports that drive growth{" "}
                            </p>
                        </div>

                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img src={icon4} alt="search icon" className="" />
                            <p className="text-xl text-left w-[205px]">
                                <span className="font-bold">ACADEMY</span> to
                                give you the skills for success in your career
                            </p>
                        </div>
                    </div>
                </div>
                {/* right container */}
                <div className="hidden lg:flex">images</div>
            </div>
        </div>
    );
};

export default Page2;
