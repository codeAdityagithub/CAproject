import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Topleft from "../components/resumepage/Topleft";
import TopRight from "../components/resumepage/TopRight";
import Recommend from "../components/resumepage/Recommend";

const Resume = () => {
    const { ca_id } = useParams();

    const { data } = useQuery({
        queryKey: ["resume", ca_id],
        queryFn: async ({ signal }) => {
            const data = await axios
                .get(`${import.meta.env.VITE_API_URL}/resume/${ca_id}`, {
                    signal,
                })
                .then((res) => res.data);
            return data;
        },
    });

    return (
        <div className="min-h-screen max-w-[1300px] m-auto p-4 flex flex-col items-center justify-center">
            {/* top part */}
            <div className="flex w-full h-full items-start justify-between">
                {/* left part */}
                <Topleft data={data?.result} />
                {/* right part */}
                <TopRight data={data?.result} />
            </div>
            {/* bottom part */}
            <Recommend data={data?.recommended} />
        </div>
    );
};

export default Resume;
