"use client";
import axios from "axios";
import React from "react";
import { serverURL } from "@/utils/util";
import Link from "next/link";

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
        <div className="radial-progress font-bold text-4xl mt-4" style={{ "--value": data?.resume?.atsScore * 10, "--size": "10rem" }}>{data?.resume?.atsScore}</div>
        <ul className="flex flex-col">
            {
                data?.resume?.atsRemarks.map((remark: any) => {
                    return <li className="badge">{remark}</li>
                })
            }
        </ul>
        <div className="flex mt-4">
            <Link href="/start"><button className="btn btn-primary">RE-UPLOAD RESUME</button></Link>
        </div>
    </div>
}
