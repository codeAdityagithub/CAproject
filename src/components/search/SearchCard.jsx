import React from "react";

import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const SearchCard = ({ item }) => {
    return (
        <Link
            tabIndex={0}
            to={`/resume/${item.id}`}
            className="bg-white text-black w-full p-4 transition-colors focus:bg-gray-300  hover:bg-gray-300 flex items-center justify-between"
        >
            {item.name}
            <span className="inline-flex items-start justify-center text-primaryBlue">
                {item.rating}
                <StarIcon fontSize="small" />
                <span className="text-black">{"("+item.reviewCount+")"}</span>
            </span>
        </Link>
    );
};

export default SearchCard;
