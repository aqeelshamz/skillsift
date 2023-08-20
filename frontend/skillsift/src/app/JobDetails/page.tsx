"use client";

import Homepage from "../components/Homepage";
import { SiMusicbrainz } from "react-icons/si";
import { BsCashStack } from "react-icons/bs";

export default function Page() {
	const skill = [
		"Programming Languages",
		"Web Development",
		"Database Management",
		"Cloud Computing",
		"Cybersecurity",
		"Networking",
	];

	return (
		<div className="bg-white w-full h-full overflow-auto m-10 ">
			<div className="md:text-5xl text-3xl font-extrabold mt-4 p-3 md:p-5 ">
				Software Engineer (Remote)
			</div>
			<div className="md:text-3xl text-xl font-semibold opacity-60 p-3 md:px-5 ">
				Google
			</div>
			<div className="">
				<div className="">
					<div className="md:text-2xl text-lg max-w-[1100px] text-justify opacity-90 p-3 md:px-5">
						As a Software Engineer at Google, you will be part of a
						diverse and dynamic team that creates groundbreaking
						solutions to complex challenges. Your role will involve
						developing and optimizing software that powers some of
						the most widely used products and services globally.
					</div>
					<div className="hidden md:block">
						<div className=" md:text-3xl text-xl  font-semibold p-3 md:px-5 md:flex sm:items-center  mb-5">
							<div className="flex">
								<BsCashStack
									className="opacity-60 mr-1"
									size={30}
								/>{" "}
								<span className="opacity-60">Salary : </span>{" "}
								<span className="opacity-90"> ₹200000</span>
							</div>
							<button
								type="button"
								className="text-white sm:ml-7 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-5 mr-2 mb-2  "
							>
								Apply Now
							</button>
						</div>
					</div>
				</div>
				<div className="">
					<div className="md:text-3xl text-xl font-semibold opacity-60 p-1 flex">
						<SiMusicbrainz className="opacity-90 " size={30} />{" "}
						Skill Required{" "}
					</div>
					{skill.map((item: string, index: number) => (
						<li
							className="md:text-xl text-sm font-semibold opacity-90 p-3 md:px-5 flex"
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
						<span className="opacity-90"> ₹200000</span>
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
