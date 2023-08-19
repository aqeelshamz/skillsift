"use client";
import { serverURL } from "@/utils/util";
import axios from "axios";
import { useState } from "react";

export default function Page() {
    const [progress, setProgress] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(0);
    const [dataTotal, setDataTotal] = useState(0);
    const [uploading, setUploading] = useState(false);

    const uploadResume = (e: any) => {
        setUploading(true);
        const data = new FormData();
        data.append("resume", e.target.files[0]);

        const axiosInstance = axios.create({
            baseURL: `${serverURL}`,
        });

        axiosInstance.post("/resume/upload", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (data) => {
                const progress = Math.round((100 * data.loaded) / (data.total ?? 0));
                setProgress(progress);
                setDataLoaded(data.loaded);
                setDataTotal(data.total ?? 0);
            },
        });
    }

    return <div className="flex w-screen h-screen flex-col items-center text-black p-5">
        <input type="file" onChange={(e) => uploadResume(e)} />
        {progress}
        <div>OR</div>
        <div className="form-control w-full max-w-[50vh]">

            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
        </div>
    </div>
}