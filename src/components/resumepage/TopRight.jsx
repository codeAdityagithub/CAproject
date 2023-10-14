import React from "react";
import notfound from "../../assets/notfound.jpeg";

const TopRight = ({ data }) => {
    return (
        <div className="flex-[4] max-w-[650px] p-4 flex flex-col items-start gap-6">
            {/* image */}
            <img
                className="object-contain max-h-[400px]"
                src={data?.image}
                onError={(e) => (e.target.src = notfound)}
                alt={data?.name || "resume image"}
            />
            {/* about */}
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">About {data?.name}</h2>
                <div className="w-full flex gap-3 flex-wrap">
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-[#999999]">FROM</div>
                        {data?.about.from}
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-[#999999]">
                            PARTNER SINCE
                        </div>
                        {data?.about.partnerSince}
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-[#999999]">
                            AVG RESPONSE TIME
                        </div>
                        {data?.about.averageResponseTime}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-[#999999]">About</div>
                    {data?.about.description}
                </div>
            </div>
            {/* services */}
            <div className="flex items-start justify-center">
                <div className="flex-1">
                    <div className="font-bold text-[#999999]">
                        SERVICES I OFFER
                    </div>
                    <ul>
                        {data?.about.services.map((item, ind) => (
                            <li key={ind} className="list-disc list-inside">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <div className="font-bold text-[#999999]">WHY ME?</div>
                    <ul>
                        {data?.about.benefits.map((item, ind) => (
                            <li key={ind} className="list-disc list-inside">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopRight;
