"use client";
import { serverURL } from "@/utils/util";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Landing() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const createAccount = async () => {
		if (password.length < 6) {
			toast.error("Password must be atleast 6 characters long!");
			return;
		}

		const config = {
			method: "POST",
			url: `${serverURL}/user/signup`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": `application/json`,
			},
			data: {
				name: name,
				email: email,
				password: password,
				type: 0,
			},
		};

		axios(config)
			.then(async (response) => {
				setEmail("");
				setPassword("");
				setName("");
				toast.success("Account created!");
				await login();
				window.location.href = "/start";
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			});
	};

	const login = async () => {
		const config = {
			method: "POST",
			url: `${serverURL}/user/login`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": `application/json`,
			},
			data: {
				email: email,
				password: password,
			},
		};

		axios(config).then((response) => {
			setPassword("");
			localStorage.setItem("token", response.data.token);
		});
	};

	return (
		<>
			<div className="flex w-screen h-screen flex-col text-black p-5">
				<nav className="flex justify-between">
					<p className="text-4xl font-bold ">SkillSift</p>
					<div className="flex">
						<button className="btn mr-2">For Organizations</button>
						<label
							htmlFor="login_modal"
							className="btn btn-primary"
							onClick={() => {
								setEmail("");
								setPassword("");
							}}
						>
							Login
						</label>
					</div>
				</nav>
				<main className="w-full h-full flex justify-center items-center flex-col">
					<p className="text-4xl">Final stop on job search.</p>
					<p className="text-lg mt-4">
						Upload your resume and get job recommendations based on
						your skills. We'll send job applications on behalf of
						you.
					</p>
					<label
						htmlFor="createaccount_modal"
						className="btn btn-primary mt-10"
					>
						Get Started
					</label>
				</main>
				{/* Create Account Modal */}
				<input
					type="checkbox"
					id="createaccount_modal"
					className="modal-toggle"
				/>
				<div className="modal">
					<div className="modal-box">
						<div className="flex justify-between items-center">
							<h3 className="font-bold text-lg">
								Create Account
							</h3>
							<label
								htmlFor="createaccount_modal"
								className="btn btn-circle"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</label>
						</div>
						<label className="label mt-4">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							placeholder="Name"
							className="input input-bordered w-full"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label className="label mt-4">
							<span className="label-text">Email</span>
						</label>
						<input
							type="text"
							placeholder="Email"
							className="input input-bordered w-full"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label className="label mt-4">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Password"
							className="input input-bordered w-full"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<div className="modal-action">
							<label
								htmlFor="createaccount_modal"
								className="btn btn-primary w-full"
								onClick={() => {
									createAccount();
								}}
							>
								Create Account
							</label>
						</div>
					</div>
				</div>
				{/* Login */}
				<input
					type="checkbox"
					id="login_modal"
					className="modal-toggle"
				/>
				<div className="modal">
					<div className="modal-box">
						<div className="flex justify-between items-center">
							<h3 className="font-bold text-lg">Login</h3>
							<label
								htmlFor="login_modal"
								className="btn btn-circle"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</label>
						</div>
						<div className="form-control w-full">
							<label className="label mt-4">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="Email"
								className="input input-bordered w-full"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label className="label mt-4">
								<span className="label-text">Password</span>
							</label>
							<input
								type="text"
								placeholder="Password"
								className="input input-bordered w-full"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="modal-action">
							<button
								className="btn btn-primary w-full"
								onClick={() => login()}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
}
