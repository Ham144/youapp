"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const LoginPage = () => {
	//redux

	//states for login
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//others
	const [showPassword, setShowPassword] = React.useState(false);
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
						Login
					</h2>
					<input
						type="text"
						placeholder="Enter username/Email"
						className="input  input-accent w-full 
                    border-none
                    bg-slate-600 text-white 
                    "
					/>
					<span className="relative w-full flex ">
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Enter Password"
							className="input  input-accent w-full 
                    border-none
                    bg-slate-600 text-white 
                    "
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-2 items-center self-center pr-3"
						>
							{showPassword ? (
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
						disabled={!email || !password}
					>
						Login
					</button>
					<div className="w-full mt-9 opacity-75">
						<p className="gap-x-3 flex text-white justify-center">
							No account?
							<span
								className="text-yellow-200 text-center cursor-pointer border-b-2 border-yellow-200ring-offset-1"
								onClick={() => router.push("/register")}
							>
								Register here
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
