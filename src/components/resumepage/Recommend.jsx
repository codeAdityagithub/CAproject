import React from "react";
import RecommendedCard from "../cards/RecommendedCard";

const Recommend = ({ data }) => {
    return (
        <div className="w-full flex flex-col">
            <h2 className="text-3xl font-bold m-2">Recommended for you</h2>
            <div className="flex md:flex-row flex-col gap-4">
                {data?.map((item) => (
                    <RecommendedCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Recommend;
