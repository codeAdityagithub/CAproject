import React from "react";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import Student from "../../assets/Student.png";
import Teacher from "../../assets/Teacher.png";
// import Row from "../../assets/teacherchat1.png";
// import Row1 from "../../assets/teacherchat2.png";
// import col from "../../assets/studentchat1.png";
// import col1 from "../../assets/studentchat2.png";
// import col2 from "../../assets/studentchat3.png";

const Page3 = () => {
    return (
        <div className="mt-16 sm:mt-0 min-h-screen h-min w-full flex flex-col items-center justify-center">
            <div className="flex items-start justify-center min-h-[500px]">
                {/* left container */}
                <div className="xl:flex-1 flex-[3] flex flex-col gap-4 items-start px-4">
                    <h1 className="heading sm:leading-[97px] text-center lg:text-left">
                        <span className="heroGradientText">
                            All-in-One platform
                        </span>{" "}
                        that Makes Easier
                    </h1>
                    <p className="sm:text-lg md:text-xl md:text-[24px] text-center lg:text-left">
                        We are more than a platform; We are your success
                        partner. Discover our services to achieve your business
                        and educational goals
                    </p>
                    {/* cards */}
                    <div className="cards flex items-center gap-4 justify-center lg:justify-start flex-wrap w-full">
                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img
                                loading="lazy"
                                src={icon1}
                                alt="search icon"
                                className=""
                            />
                            <p className="sm:text-lg md:text-xl text-left w-[205px]">
                                <span className="font-bold">SEARCH</span> for
                                vital company information
                            </p>
                        </div>

                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img
                                loading="lazy"
                                src={icon2}
                                alt="search icon"
                                className=""
                            />
                            <p className="sm:text-lg md:text-xl text-left w-[205px]">
                                <span className="font-bold">CONNECT</span> with
                                the resources to meet your business needs
                            </p>
                        </div>

                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img
                                loading="lazy"
                                src={icon3}
                                alt="search icon"
                                className=""
                            />
                            <p className="sm:text-lg md:text-xl text-left w-[205px]">
                                <span className="font-bold">RESEARCH</span> and
                                generate reports that drive growth{" "}
                            </p>
                        </div>

                        <div className="flex gap-1 items-start justify-center h-[96px]">
                            <img
                                loading="lazy"
                                src={icon4}
                                alt="search icon"
                                className=""
                            />
                            <p className="sm:text-lg md:text-xl text-left w-[205px]">
                                <span className="font-bold">ACADEMY</span> to
                                give you the skills for success in your career
                            </p>
                        </div>
                    </div>
                </div>
                {/* right container */}
                <div className="hidden  min-h-[500px] h-min lg:flex xl:flex-row lg:flex-col justify-center flex-[2] xl:flex-1">
                    <div className="flex items-end justify-center">
                        <img loading="lazy" src={Teacher} alt="Teacher" className="lg:w-[250px]" />
                        {/* <div className="chat1">
                            <img loading="lazy" src={Row} alt="Teachers chat" />
                            <img loading="lazy" src={Row1} alt="Teachers chat" />
                        </div> */}
                    </div>
                    <div className="flex items-start justify-center">
                        {/* <div className="chat2">
                            <img loading="lazy" src={col} alt="Students chat" />
                            <img loading="lazy" src={col1} alt="Students chat" />
                            <img loading="lazy" src={col2} alt="Students chat" />
                        </div> */}
                        <img loading="lazy" src={Student} alt="Student" className="lg:w-[250px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
