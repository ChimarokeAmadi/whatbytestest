"use client";

import { useState } from "react";
import HyperText from "../HyperText/HyperText";
import PopUp from "../PopUp/PopUp";
import QuickStats from "../QuickStats/QuickStats";

import { graphData } from "@/app/page";
// import { studentPercentile } from "@/app/page";
import ComparisonGraph from "../ComparisonGraph/ComparisonGraph";
import QAnalysis from "../QAnalysis/QAnalysis";
import Syllabus from "../Syllabus/Syllabus";

export default function StateContainer() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [scores, setScores] = useState<{
		rank?: number;
		percentile?: number;
		score?: number;
	}>({}); // Initially empty object

	const openPopup = () => setIsPopupOpen(true);
	const closePopup = () => setIsPopupOpen(false);

	// Handle score submission with empty fields allowed
	const handleScoreSubmit = (values: {
		rank?: number;
		percentile?: number;
		score?: number;
	}) => {
		setScores(values);
		closePopup();
	};

	return (
		<div className='flex gap-10'>
			<div className='flex flex-col gap-3 min-w-[600px]'>
				<HyperText onUpdateClick={openPopup} />
				<PopUp
					isOpen={isPopupOpen}
					onClose={closePopup}
					onSubmit={handleScoreSubmit}
				/>
				<QuickStats
					rank={scores.rank}
					percentile={scores.percentile}
					score={scores.score}
				/>
				<ComparisonGraph percentile={scores.percentile} data={graphData} />
			</div>
			<div className='flex-grow flex flex-col gap-3'>
				<Syllabus />
				<QAnalysis fraction={scores.score} />
			</div>
		</div>
	);
}
