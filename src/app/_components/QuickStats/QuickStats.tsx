import Image from "next/image";

interface QuickStatsProps {
	rank: number | undefined;
	percentile: number | undefined;
	score: number | undefined;
}

export default function QuickStats({
	rank,
	percentile,
	score,
}: QuickStatsProps) {
	return (
		<div className='border border-slate-200 rounded-lg py-7 px-3'>
			<p className=' font-bold text-[18px]'>Quick Statistics</p>
			<div className='flex justify-around items-center'>
				<div className='flex gap-2 border-r border-slate-200 items-center pr-4 pt-4'>
					<div className='rounded-full bg-gray-100 overflow-hidden p-2'>
						<Image
							height={100}
							width={100}
							src={"/trophy.png"}
							alt=''
							className='size-[30px]'
						/>
					</div>
					<div className=''>
						<p className='font-bold text-[18px]'>{rank}</p>
						<p className='font-semibold text-gray-400'>YOUR RANK</p>
					</div>
				</div>
				<div className='flex gap-2 border-r border-slate-200 items-center pr-4 pt-4'>
					<div className='rounded-full bg-gray-100 overflow-hidden p-2'>
						<Image
							height={100}
							width={100}
							src={"/notepad.png"}
							alt=''
							className='size-[30px]'
						/>
					</div>
					<div className=''>
						<p className='font-bold text-[18px]'>{percentile}%</p>
						<p className='font-semibold text-gray-400'>PERCENTILE</p>
					</div>
				</div>
				<div className='flex gap-2 items-center  pr-4 pt-4'>
					<div className='rounded-full bg-gray-100 overflow-hidden p-2'>
						<Image
							height={100}
							width={100}
							src={"/check.png"}
							alt=''
							className='size-[30px]'
						/>
					</div>
					<div className=''>
						<p className='font-bold text-[18px]'>{score}/15</p>
						<p className='font-semibold text-gray-400'>CORRECT ANSWERS</p>
					</div>
				</div>
			</div>
		</div>
	);
}
