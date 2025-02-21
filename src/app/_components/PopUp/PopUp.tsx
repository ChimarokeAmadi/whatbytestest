"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (values: {
		rank?: number;
		percentile?: number;
		score?: number;
	}) => void;
}

export default function PopUp({ isOpen, onClose, onSubmit }: PopupProps) {
	const [rank, setRank] = useState("1");
	const [percentile, setPercentile] = useState("50");
	const [score, setScore] = useState("12");

	const [rankError, setRankError] = useState("");
	const [percentileError, setPercentileError] = useState("");
	const [scoreError, setScoreError] = useState("");

	if (!isOpen) return null;

	// ✅ Reusable validation function
	const validateField = (value: string, setError: (msg: string) => void) => {
		if (!value.trim()) setError("Required | should be a number");
		else if (isNaN(Number(value))) setError("Should be a number");
		else setError("");
	};

	const handleSubmit = () => {
		validateField(rank, setRankError);
		validateField(percentile, setPercentileError);
		validateField(score, setScoreError);

		if (!rankError && !percentileError && !scoreError) {
			onSubmit({
				rank: Number(rank),
				percentile: Number(percentile),
				score: Number(score),
			});
			handleCancel();
		}
	};

	const handleCancel = () => {
		setRankError("");
		setPercentileError("");
		setScoreError("");
		onClose();
	};

	return (
		<>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black bg-opacity-50' onClick={onClose} />
			{/* Popup Content */}
			<div className='fixed bg-white rounded-md shadow-2xl p-8 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[650px]'>
				<div className='flex justify-between mb-5'>
					<h2 className='text-2xl font-bold mb-4 text-gray-800'>
						Update Scores
					</h2>
					<Image
						height={100}
						width={100}
						quality={100}
						src={"/HTML5.png"}
						alt='html image'
						className='size-[30px]'
					/>
				</div>

				{/* Input fields */}
				<div className='flex flex-col gap-7 mb-6 '>
					{/* Rank Input */}
					<div className='flex justify-between items-center'>
						<div className='flex gap-4'>
							<div className='rounded-full size-6 font-bold text-white bg-blue-800 text-center'>
								1
							</div>
							<p>
								Update your <span className='font-bold'>Rank</span>
							</p>
						</div>
						<div>
							<input
								type='number'
								placeholder='Rank'
								value={rank}
								onChange={(e) => {
									setRank(e.target.value);
									validateField(e.target.value, setRankError);
								}}
								className={`border ${
									rankError ? "border-red-500" : "border-blue-400"
								} rounded-md p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield`}
							/>
							{rankError && <p className='text-red-500 text-sm'>{rankError}</p>}
						</div>
					</div>

					{/* Percentile Input */}
					<div className='flex justify-between items-center'>
						<div className='flex gap-4'>
							<div className='rounded-full size-6 font-bold text-white bg-blue-800 text-center'>
								2
							</div>
							<p>
								Update your <span className='font-bold'>Percentile</span>
							</p>
						</div>
						<div>
							<input
								type='number'
								placeholder='Percentile'
								value={percentile}
								onChange={(e) => {
									setPercentile(e.target.value);
									validateField(e.target.value, setPercentileError);
								}}
								className={`border ${
									percentileError ? "border-red-500" : "border-blue-400"
								} rounded-md p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield`}
							/>
							{percentileError && (
								<p className='text-red-500 text-sm'>{percentileError}</p>
							)}
						</div>
					</div>

					{/* Score Input */}
					<div className='flex justify-between items-center'>
						<div className='flex gap-4'>
							<div className='rounded-full size-6 font-bold text-white bg-blue-800 text-center'>
								3
							</div>
							<p>
								Update your{" "}
								<span className='font-bold'>Current Score (out of 15)</span>
							</p>
						</div>
						<div>
							<input
								type='number'
								placeholder='Current Score'
								value={score}
								onChange={(e) => {
									setScore(e.target.value);
									validateField(e.target.value, setScoreError);
								}}
								className={`border ${
									scoreError ? "border-red-500" : "border-blue-400"
								} rounded-md p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield`}
							/>
							{scoreError && (
								<p className='text-red-500 text-sm'>{scoreError}</p>
							)}
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className='flex justify-end gap-6'>
					<button
						onClick={handleCancel}
						className='bg-white text-blue-800 py-2 px-3 rounded-lg hover:bg-blue-800 border border-blue-900 hover:text-white transition'>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						className='text-white font-bold border-3 rounded-lg bg-clip-border bg-gradient-to-br from-gray-600 to-black p-[3px]'>
						<div className='bg-blue-800 hover:bg-blue-500 py-[10px] px-5 rounded-lg flex gap-3 items-center'>
							<p>Save</p>
							<ArrowRightIcon className='size-3' />
						</div>
					</button>
				</div>
			</div>
		</>
	);
}
