"use client";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <>
    
    <div className="flex w-screen h-screen flex-col text-black p-5">
      <nav className="flex justify-between">
        <p className="text-2xl font-bold">SkillSift</p>
        <div className="flex">
          <button className="btn mr-2">For Organizations</button>
          <label htmlFor="login_modal" className="btn btn-primary" >Login</label>
        </div>
      </nav>
      <main className="w-full h-full flex justify-center items-center flex-col">
        <p className="text-4xl">Lorem ipsum dolor sit amet.</p>
        <p className="text-lg mt-4">Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. This is an example of description text.</p>
        <Link href="/start"><button className="btn btn-primary mt-10">Get Started</button></Link>
      </main>
      {/* Login */}
      <input type="checkbox" id="login_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Login</h3>
            <label htmlFor="login_modal" className="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label mt-4">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered w-full" />
          </div>
          <div className="modal-action">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <div className="flex justify-center">

          </div>
        </div>
      </div>
    </div></>
  );
}

