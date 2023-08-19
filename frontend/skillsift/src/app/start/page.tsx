"use client";
import { serverURL } from "@/utils/util";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
    const [progress, setProgress] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(0);
    const [dataTotal, setDataTotal] = useState(0);
    const [uploading, setUploading] = useState(false);

    const blankResumeData = {
        "name": "",
        "email": "",
        "phone": "",
        "gender": "",
        "qualification": "",
        "college": "",
        "specialization": "",
        "skills": [
        ],
        "yearOfGraduation": ""
    };

    const [resumeData, setResumeData] = useState<any>(blankResumeData);

    const uploadResume = (e: any) => {
        setUploading(true);
        const data = new FormData();
        data.append("file", e.target.files[0]);

        const axiosInstance = axios.create({
            baseURL: `${serverURL}`,
        });

        axiosInstance.post("/resume/upload", data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (data) => {
                const newProgress = Math.round((100 * data.loaded) / (data.total ?? 0));
                setProgress(newProgress);
                setDataLoaded(data.loaded);
                setDataTotal(data.total ?? 0);
            },
        }).then((res) => {
            toast.success("Resume uploaded successfully!");
            setResumeData(res.data);
            setUploading(false);
        }).catch((err) => {
            toast.error("Error uploading resume!");
            setUploading(false);
        });
    }

    return <div className="w-full h-full overflow-y-scroll flex flex-col items-center p-5">
        <input type="file" onChange={(e) => uploadResume(e)} />
        {progress}
        <div>OR</div>
        <div className="form-control w-full h-full max-w-[50vh]">

            <label className="label mt-4">
                <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Full Name" className="input input-bordered w-full" value={resumeData["name"]} />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" value={resumeData["email"]} />
            <label className="label mt-4">
                <span className="label-text">Phone</span>
            </label>
            <input type="text" placeholder="Phone Number" className="input input-bordered w-full" value={resumeData["phone"]} />
            <label className="label mt-4">
                <span className="label-text">Gender</span>
            </label>
            <input type="text" placeholder="Gender" className="input input-bordered w-full" value={resumeData["gender"]} />
            <label className="label mt-4">
                <span className="label-text">Qualification</span>
            </label>
            <input type="text" placeholder="Qualification" className="input input-bordered w-full" value={resumeData["qualification"]} />
            <label className="label mt-4">
                <span className="label-text">College</span>
            </label>
            <input type="text" placeholder="College" className="input input-bordered w-full" value={resumeData["college"]} />
            <label className="label mt-4">
                <span className="label-text">Skills</span>
            </label>
            <ul>
                {
                    resumeData.skills.map((skill: any) => {
                        return <li>{skill}</li>
                    })
                }
            </ul>
            <label className="label mt-4">
                <span className="label-text">Year of Graduation</span>
            </label>
            <input type="text" placeholder="Year of Graduation" className="input input-bordered w-full" value={resumeData["yearOfGraduation"]} />
                <button className="btn btn-primary mt-5 mb-10">Continue</button>
        </div>
        <ToastContainer />
    </div>
}