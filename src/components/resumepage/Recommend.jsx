import React from "react";
import RecommendedCard from "../cards/RecommendedCard";

const Recommend = ({ data }) => {
    return (
        <div className="w-full mb-16 flex flex-col gap-4 px-2 sm:px-6">
            <h2 className="text-3xl font-bold m-2">Recommended for you</h2>
            <div className="flex flex-row items-center justify-center md:justify-start flex-wrap gap-4">
                {data?.map((item) => (
                    <RecommendedCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Recommend;
