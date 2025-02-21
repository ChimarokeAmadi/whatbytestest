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
	const [rank, setRank] = useState("");
	const [percentile, setPercentile] = useState("");
	const [score, setScore] = useState("");

	if (!isOpen) return null;

	const handleSubmit = () => {
		onSubmit({
			rank: rank ? Number(rank) : undefined,
			percentile: percentile ? Number(percentile) : undefined,
			score: score ? Number(score) : undefined,
		});
		handleCancel();
	};

	const handleCancel = () => {
		setRank("");
		setPercentile("");
		setScore("");
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
					<div className='flex justify-between items-center'>
						<div className='flex gap-4'>
							<div className=' rounded-[100%] size-6 font-bold text-white bg-blue-800 text-center'>
								1
							</div>

							<p className=''>
								Update your <span className='font-bold'>Rank</span>
							</p>
						</div>

						<input
							type='number'
							placeholder='Rank'
							value={rank}
							onChange={(e) => setRank(e.target.value)}
							className='border border-blue-400 rounded-md p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield'
						/>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex gap-4'>
							<div className=' rounded-[100%] size-6 font-bold text-white bg-blue-800 text-center'>
								2
							</div>

							<p className=''>
								Update your <span className='font-bold'>Percentile</span>
							</p>
						</div>

						<input
							type='number'
							placeholder='Percentile'
							value={percentile}
							onChange={(e) => {
								const newValue = parseInt(e.target.value, 10);
								if (newValue <= 100 || isNaN(newValue)) {
									setPercentile(e.target.value);
								}
							}}
							className='border border-blue-400 rounded-md p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield'
						/>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex gap-4'>
							<div className=' rounded-[100%] size-6 font-bold text-white bg-blue-800 text-center'>
								3
							</div>

							<p className=''>
								Update your{" "}
								<span className='font-bold'>Current Score (out of 15)</span>
							</p>
						</div>

						<input
							type='number'
							placeholder='Current Score'
							value={score}
							onChange={(e) => {
								const newValue = parseInt(e.target.value, 10);
								if (newValue <= 15 || isNaN(newValue)) {
									setScore(e.target.value);
								}
							}}
							className='border border-blue-400 rounded-md p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield'
						/>
					</div>
				</div>
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
