"use client";

import Homepage from "../components/Homepage";
import { SiMusicbrainz } from "react-icons/si";
import { BsCashStack } from "react-icons/bs";
import { serverURL } from "@/utils/util";
import React, { useEffect } from "react";
import axios from "axios";

type Params = {
	params: {
		jobId: string
	}
}


export default function Page({ params: { jobId } }: Params) {

	const [job, setJob] = React.useState<any>({});

	const getJob = async () => {
		const config = {
			method: "POST",
			url: `${serverURL}/job/by-id`,
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			},
			data: {
				jobId: jobId
			}
		};

		axios(config)
			.then(async (response) => {
				setJob(response.data);
			})
	}

	useEffect(() => { getJob() }, [])

	const skill = [
		"Programming Languages",
		"Web Development",
		"Database Management",
		"Cloud Computing",
		"Cybersecurity",
		"Networking",
		"DevOps",
		"Artificial Intelligence and Machine Learning",
		"Agile Methodology",
		"Problem Solving and Debugging",
	];

	return (
		<div className="bg-white w-full h-full overflow-auto ">
			<div className="md:text-5xl text-3xl font-extrabold mt-4 p-3 md:p-5">
				{job?.title}
			</div>
			<div className="md:text-3xl text-xl font-semibold opacity-60 p-3 md:px-5 ">
				{job?.companyName}
			</div>
			<div className="md:flex">
				<div className="">
					<div className="md:text-2xl text-lg max-w-[1100px] text-justify  font-semibold opacity-90 p-3 md:px-5 ">
						{job?.description}
					</div>
					<div className="hidden md:block">
						<div className=" md:text-3xl text-xl  font-semibold p-3 md:px-5 md:flex sm:items-center mt-10 mb-20">
							<div className="flex">
								{" "}
								<BsCashStack
									className="opacity-60 mr-1"
									size={30}
								/>{" "}
								<span className="opacity-60">Salary : </span>{" "}
								<span className="opacity-90">₹ {job?.salary}</span>
							</div>
							<button
								type="button"
								className="text-white sm:ml-7 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-5 mr-2 mb-2  "
							>
								Apply Now !
							</button>
						</div>
					</div>
				</div>
				<div className="">
					<div className="md:text-3xl text-xl font-semibold opacity-60 p-3 md:px-5 flex">
						<SiMusicbrainz className="opacity-90 mr-1" size={30} />{" "}
						Skill Required{" "}
					</div>
					{job?.skillsRequired?.map((item: string, index: number) => (
						<li
							className="md:text-3xl text-xl font-semibold opacity-90 p-3 md:px-5 flex"
							key={index}
						>
							{item}
						</li>
					))}
				</div>
			</div>

			<div className="md:hidden items-center block md:text-3xl text-xl  font-semibold p-3 md:px-5 sm:flex sm:items-center mt-10 mb-20">
				<div className="flex">
					<div className="flex">
						<BsCashStack className="opacity-60 mr-1" size={30} />{" "}
						<span className="opacity-60">Salary : </span>{" "}
						<span className="opacity-90">₹ {job?.salary}</span>
					</div>
					<button
						type="button"
						className="text-white ml-4 sm:ml-7 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-2 py-2 mr-2 mb-2  "
					>
						Apply Now !
					</button>
				</div>
			</div>
		</div>
	);
}
