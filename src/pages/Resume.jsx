import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Topleft from "../components/resumepage/TopLeft";
import TopRight from "../components/resumepage/TopRight";
import Recommend from "../components/resumepage/Recommend";

import HomeIcon from "@mui/icons-material/Home";


const Resume = () => {
    const { ca_id } = useParams();
    const navigate = useNavigate();
    const { data, isError } = useQuery({
        queryKey: ["resume", ca_id],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/resume/${ca_id}`
            );

            const data = res.data;
            return data;
        },
        retry:1
    });
    if (isError) {
        throw new Response("Not Found", { status: 404 });
    }

    return (
        <div className="min-h-screen max-w-[1300px] pt-[85px] m-auto p-4 flex flex-col gap-8 items-center justify-center relative">
            {/* top part */}
            <div className="flex flex-col md:flex-row w-full h-full items-center md:items-start justify-between">
                {/* left part */}
                <Topleft data={data?.result} />
                {/* right part */}
                <TopRight data={data?.result} />
            </div>
            {/* bottom part */}
            <Recommend data={data?.recommended} />
            <Link to={"/"} className="btn-fill w-auto h-auto p-3 rounded-full fixed right-4 bottom-6 z-50"><HomeIcon /></Link>
        </div>
    );
};

export default Resume;
