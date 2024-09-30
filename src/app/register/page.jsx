"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const RegisterPage = () => {
	//redux

	//states for register
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [cofirmPassword, setConfirmPassword] = useState("");

	//others
	const [showPassword, setShowPassword] = useState([false, false]);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const router = useRouter();

	return (
		<div className="w-full py-3 px-2 ">
			<button className="btn bg-transparent  border-none text-white flex items-center font-bold ">
				<span className="mr-1 translate-y-[-2px]">
					<IoIosArrowBack size={20} />
				</span>
				<p>Back</p>
			</button>
			<div className="flex flex-col w-full justify-center h-screen">
				<div
					className={`flex flex-col items-center justify-center px-5 gap-y-4 `}
				>
					<h2 className={`font-bold flex self-start px-4 text-white text-2xl`}>
						Register
					</h2>
					<input
						type="email"
						placeholder="Enter Email"
						className="input  input-accent w-full 
                    border-none
                    bg-slate-600 text-white 
                    "
					/>
					<input
						type="text"
						placeholder="Create Username"
						className="input  input-accent w-full 
                    border-none
                    bg-slate-600 text-white 
                    "
					/>
					<span className="relative w-full flex ">
						<input
							type={showPassword[0] ? "text" : "password"}
							placeholder="Create Password"
							className="input  input-accent w-full 
                    border-none
                    bg-slate-600 text-white 
                    "
						/>
						<span
							onClick={() => setShowPassword((prev) => [!prev[0], prev[1]])}
							className="absolute right-2 items-center self-center pr-3"
						>
							{showPassword[0] ? (
								<FaEye size={20} className={`text-white font-light `} />
							) : (
								<FaRegEyeSlash size={20} className={`text-white font-light `} />
							)}
						</span>
					</span>
					<span className="relative w-full flex ">
						<input
							type={showPassword[1] ? "text" : "password"}
							placeholder="Create Password"
							className="input  input-accent w-full 
                    border-none
                    bg-slate-600 text-white 
                    "
						/>
						<span
							onClick={() => setShowPassword((prev) => [prev[0], !prev[1]])}
							className="absolute right-2 items-center self-center pr-3"
						>
							{showPassword[1] ? (
								<FaEye size={20} className={`text-white font-light `} />
							) : (
								<FaRegEyeSlash size={20} className={`text-white font-light `} />
							)}
						</span>
					</span>
					<button
						className={`btn disabled:bg-button disabled:opacity-40
                        w-full mt-3 border-none  text-white font-bold 
                        
                        ${
													email &&
													password &&
													"bg-gradient-to-r from-green-300 to-button "
												}
                                                
                        `}
						disabled={!email || !password || !cofirmPassword || !username}
					>
						Register
					</button>
					<div className="w-full mt-9 opacity-75">
						<p className="gap-x-3 flex text-white justify-center">
							Have an account?
							<span
								className="text-yellow-200 text-center cursor-pointer border-b-2 border-yellow-200ring-offset-1"
								onClick={() => router.push("/login")}
							>
								Login here
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
