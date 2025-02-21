"use client";

import Image from "next/image";

interface CircularProgressBarProps {
	fraction: number; // Value between 0 and 1
	size?: number; // Diameter of the circle in pixels
	strokeWidth?: number; // Thickness of the circle
	progressColor: string; // Color of the progress stroke
	trackColor?: string; // Background stroke color
	label?: string; // Optional label in the center
}

export default function CircularProgressBar({
	fraction,
	size = 200,
	strokeWidth = 27,
	progressColor = "#0000FF", // Default: Indigo-600
	trackColor = "#E5E7EB", // Default: Gray-200
	label,
}: CircularProgressBarProps) {
	const normalizedFraction = Math.min(Math.max(fraction, 0), 1); // Clamp between 0 and 1
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference * (1 - normalizedFraction);

	return (
		<div className='relative' style={{ width: size, height: size }}>
			<svg width={size} height={size}>
				<circle
					stroke={trackColor}
					fill='transparent'
					strokeWidth={strokeWidth}
					r={radius}
					cx={size / 2}
					cy={size / 2}
				/>
				<circle
					stroke={progressColor}
					fill='transparent'
					strokeWidth={strokeWidth}
					strokeLinecap='square'
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					r={radius}
					cx={size / 2}
					cy={size / 2}
					style={{
						transition: "stroke-dashoffset 0.5s ease",
						transform: "rotate(-90deg)",
						transformOrigin: "50% 50%",
					}}
				/>
			</svg>
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='text-center'>
					<Image
						height={100}
						width={100}
						src={"/target.png"}
						alt=''
						className='size-16'
						quality={100}
					/>
					{label && <p className='text-sm text-gray-500'>{label}</p>}
				</div>
			</div>
		</div>
	);
}
