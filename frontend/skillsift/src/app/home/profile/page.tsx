"use client";
import axios from "axios";
import React from "react";
import { serverURL } from "@/utils/util";

export default function Page() {
    const [data, setData] = React.useState<any>({});

    const getData = async () => {
        const config = {
            method: "GET",
            url: `${serverURL}/user/profile`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        };

        axios(config)
            .then(async (response) => {
                setData(response.data);
            })
    }

    React.useEffect(() => {
        getData();
    }, []);

    return <div className="flex flex-col p-5 h-full overflow-y-auto">
        <p className="font-bold text-3xl mb-5">Profile</p>
        {/* <p className="font-bold text-2xl my-5">Your Recent Job Applications</p> */}
        <p>ATS Score</p>
        <div className="radial-progress font-bold text-2xl" style={{ "--value": 70, "--size": "10rem" }}>{data?.resume?.atsScore * 100}</div>
    </div>
}
