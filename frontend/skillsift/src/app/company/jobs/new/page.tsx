import React from "react";

export default function Page() {
    return <div className="max-w-[50vh] w-full h-full p-5">
        <p className="font-bold text-3xl">Create New Job</p>
        <label className="label mt-4">
            <span className="label-text">Job Title</span>
        </label>
        <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full"
        />
        <label className="label mt-4">
            <span className="label-text">Job Description</span>
        </label>
        <textarea className="textarea textarea-bordered w-full" placeholder="Job Description"></textarea>
    </div>
}