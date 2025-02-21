import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

interface QAnalysisProps {
	fraction: number | undefined;
}

export default function QAnalysis({ fraction }: QAnalysisProps) {
	return (
		<div className='rounded-lg border border-slate-200 p-4'>
			<div className='flex justify-between mb-5'>
				<h2 className='text-[18px] font-bold'>Question Analysis</h2>
				<h2 className='text-[18px] font-bold text-blue-800'>
					{fraction ? fraction : 12}/15
				</h2>
			</div>
			<h2 className='text-xl font-semibold  text-gray-500 mb-5'>
				<span className='font-black'>
					You scored {10} questions correct out of 15.
				</span>{" "}
				<br />
				However it still needs some improvements.
			</h2>
			<div className='w-full flex justify-center items-center pt-16 pb-16'>
				<CircularProgressBar
					fraction={fraction ? fraction / 15 : 12 / 15}
					label=''
					progressColor='#1E90FF'
				/>
			</div>
		</div>
	);
}
