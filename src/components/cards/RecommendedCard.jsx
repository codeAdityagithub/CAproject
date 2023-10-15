import React from "react";

import StarIcon from "@mui/icons-material/Star";
import notfound from "../../assets/notfound.jpeg";
import { Link } from "react-router-dom";

const RecommendedCard = ({ data }) => {
    return (
        <div className="w-[350px] h-[400px] flex flex-col rounded-[20px] shadow-lg items-start justify-center">
            <div className="w-full flex-1 object-contain rounded-t-[20px] relative overflow-hidden">
                <img
                    src={data?.image}
                    alt={data?.name}
                    onError={(e) => (e.target.src = notfound)}
                    className="absolute inset-0 object-contain"
                />
            </div>
            <div className="px-4 py-2 w-full flex-1 flex flex-col justify-between">
                <h2 className="text-2xl font-bold">{data?.name}</h2>
                <p className="">{data?.intro}</p>
                <span className="inline-flex items-start justify-start text-primaryBlue">
                    {data?.rating}
                    <StarIcon fontSize="small" />
                    <span className="text-black">
                        {"(" + data?.reviewCount + ")"}
                    </span>
                </span>
                <Link
                    to={`/resume/${data?.id}`}
                    className="btn-fill w-full flex items-center justify-center"
                >
                    View services
                </Link>
            </div>
        </div>
    );
};

export default RecommendedCard;
