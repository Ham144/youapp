"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
	//state for profile
	const [isAboutOpen, setIsAboutOpen] = useState(false);

	//others
	const router = useRouter();

	function handleEditImage() {
		console.log("handleEditImage");
	}

	return (
		<div className="flex flex-col w-full py-3 px-2 gap-y-5 min-h-screen">
			<div className="header flex w-full items-center justify-between">
				<button className="btn bg-transparent  border-none text-white flex items-center font-bold ">
					<span className="mr-1 translate-y-[-2px]">
						<IoIosArrowBack size={20} />
					</span>
					<p>Back</p>
				</button>
				<p className="text-center font-bold text-white text1xl">
					@youappuser12
				</p>
				<label className="btn btn-circle swap swap-rotate">
					<input type="checkbox" />
					<svg
						className="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>
					<svg
						className="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
					</svg>
				</label>
			</div>
			<button
				className={`btn h-44 w-full border-none bg-transparent glass relative`}
				onClick={handleEditImage}
			>
				<div className="absolute top-2 right-2 text-white">
					<FaEdit size={20} className="font-extralight" />
				</div>
				<div className="absolute  bottom-2 left-2 font-bold ">
					<p className="text-white opacity-100 text-xl">@youappuser12</p>
				</div>
			</button>
			<button
				className={`btn h-32 w-full border-none bg-slate-700  relative`}
				onClick={handleEditImage}
			>
				<div className="absolute top-2 right-2 text-white">
					<FaEdit size={20} className="font-extralight" />
				</div>
				<p className="flex text-left text-slate-400">
					Add in to your about to helps people know you better
				</p>
				<div className="absolute top-2 left-2 font-bold text-white">About</div>
				<div className="absolute  bottom-2 left-2 font-bold ">
					<p className="text-white opacity-100 text-xl">@youappuser12</p>
				</div>
			</button>
			<button
				className={`btn h-32 w-full border-none bg-slate-700  relative`}
				onClick={handleEditImage}
			>
				<div className="absolute top-2 right-2 text-white">
					<FaEdit size={20} className="font-extralight" />
				</div>
				<p className="flex text-left text-slate-400">
					Add in your interest to find a better match
				</p>
				<div className="absolute top-2 left-2 font-bold text-white">
					Interests
				</div>
				<div className="absolute  bottom-2 left-2 font-bold ">
					<p className="text-white opacity-100 text-xl">@youappuser12</p>
				</div>
			</button>
		</div>
	);
};

export default ProfilePage;
