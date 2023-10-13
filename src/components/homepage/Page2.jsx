import React from "react";
import Joincard from "../cards/Joincard";

const cardDetails = [
    {
        sup: "st",
        title: "Commencement of business",
        desc: "Invested shareholders must confirm payment and office address ",
        due: "Within 180 days",
        penalty: "₹50,000 for the company ₹1,000 /day for directors",
    },
    {
        sup: "nd",
        title: "Auditor Appointment",
        desc: "Company informs new auditor and submits ADT.1 form to ROC.",
        due: "Within 30 days",
        penalty: "₹300 per month.",
    },
    {
        sup: "rd",
        title: "DIN eKYC",
        desc: "Directors share personal information for identification & verification ",
        due: "Every Year",
        penalty: "₹5000 one time",
    },
    {
        sup: "th",
        title: "DPT-3",
        desc: "Companies report money taken from people to ROC; auditors confirm details.",
        due: "Within 30 days",
        penalty: "₹300 per month.",
    },
    {
        sup: "th",
        title: "MCA Form AOC-4",
        desc: "It's like an official report card for a company's documents",
        due: "On or Before 30th November ",
        penalty: "₹200 per day (No upper limit)*",
    },
    {
        sup: "th",
        title: "MCA Form MGT-7",
        desc: "Companies must annually report activities and finances to the registrar.",
        due: "On or Before 31st December",
        penalty: "₹200 per day(No upper limit)* ",
    },
];

const Page2 = () => {
    return (
        <div className="h-fit w-full flex flex-col items-center justify-center">
            {/* top heading */}
            <div className="mt-[50px] mb-[100px]">
                <h1 className="heading text-center">
                    Want to <span className="heroGradientText">Join</span> Us?
                </h1>
                <p className="text-[24px] text-center">
                    To remain with us, it is essential that you diligently
                    follow the steps provided
                </p>
            </div>
            {/* container */}
            <div className="flex items-center justify-center flex-wrap gap-12">
                {cardDetails.map((detail, ind) => (
                    <Joincard key={ind} details={detail} index={ind + 1} />
                ))}
            </div>
            {/* bottom message */}
            <div className="mt-8 p-8 md:p-12">
                * For forms AOC-4 and MGT-7, you will be charged a penalty of
                ₹200 every day until you file the form . There is no maximum
                penalty amount. So, if you don't file the form for a year, you
                will owe ₹73,000 per form
            </div>
        </div>
    );
};

export default Page2;
