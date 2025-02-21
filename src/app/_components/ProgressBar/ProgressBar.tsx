"use client";

interface ProgressBarProps {
	completion: number; // Percentage value (0 - 100)
	name: string;
	deepBg: string;
	lightBg: string;
	textColor: string;
}

export default function ProgressBar({
	completion,
	name,
	deepBg,
	lightBg,
	textColor,
}: ProgressBarProps) {
	return (
		<div className='w-full max-w-md mx-auto mt-10'>
			<h2 className='text-lg font-semibold mb-2 text-gray-500'>{name}</h2>
			<div className='flex items-center gap-3'>
				<div className={`w-full ${lightBg} rounded-full h-4 overflow-hidden`}>
					<div
						className={`${deepBg} h-full rounded-full transition-all duration-500`}
						style={{ width: `${completion}%` }}
					/>
				</div>
				<span className={`${textColor} font-medium`}>{completion}%</span>
			</div>
		</div>
	);
}
