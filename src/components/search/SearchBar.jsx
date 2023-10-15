import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";
import SearchCard from "./SearchCard";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const divref = useRef();

    const { data, isError } = useQuery({
        queryKey: ["search", query],
        queryFn: async ({ signal }) => {
            const data = await axios
                .get(`${import.meta.env.VITE_API_URL}/search?name=${query}`, {
                    signal,
                })
                .then((res) => res.data.result);
            return data;
        },
        staleTime: 1000,
        retry:1,
        enabled: query.trim() !== "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="search w-full relative" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name"
                className="border border-[#BFBFBF] rounded-[10px] px-4 h-12 sm:h-16 lg:h-[73px] w-[80%] focus:outline-1 focus:outline-primaryBlue"
            />
            <button
                type="submit"
                className="btn-fill h-12 w-[80px] text-sm sm:text-base sm:h-16 lg:h-[73px] sm:w-[140px] lg:w-[186px] -translate-x-3 absolute right-0"
            >
                Search
            </button>
            <div
                ref={divref}
                tabIndex={0}
                className="results p-1 rounded-md empty:hidden w-[80%] max-h-[200px] overflow-y-scroll absolute top-full shadow-lg flex flex-col gap-1"
            >

                {data ? (
                    data.length !== 0 ? (
                        data.map((item) => (
                            <SearchCard key={item.id} item={item} />
                        ))
                    ) : (
                        <div className="text-black w-full p-4 bg-gray-300 flex items-center justify-center">
                            No result
                        </div>
                    )
                ) : (
                    query.trim() !== "" &&
                    isError && (
                        <div className="text-black w-full p-4 bg-gray-300 flex items-center justify-center">
                            Something went wrong!
                        </div>
                    )
                )}
            </div>
        </form>
    );
};

export default SearchBar;
