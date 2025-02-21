"use client";
import Image from "next/image";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	ReferenceDot,
} from "recharts";

interface PercentileGraphProps {
	percentile: number | undefined;
	data: { percentile: number; numberOfStudents: number }[]; // Graph data
}

export default function PercentileGraph({
	percentile,
	data,
}: PercentileGraphProps) {
	// Find the data point or default to 0 if not found
	const referenceY = String(
		data.find((d) => d.percentile === percentile)?.numberOfStudents ?? 90
	);

	return (
		<div className='w-full h-[550px] bg-white rounded-xl p-4 border border-slate-200'>
			<div className='flex items-center gap-7'>
				<div className=''>
					<h2 className='text-[18px] font-bold mb-5'>Comparison Graph</h2>
					<h2 className='text-xl font-semibold mb-4 text-gray-500 '>
						<span className='font-black'>You scored 30% percentile </span>
						which is lower than the <br /> average 72% of all the engineers who
						took this assessment
					</h2>
				</div>
				<div className='bg-gray-100 rounded-full p-2 flex justify-center items-center'>
					<Image
						src={"/notepad.png"}
						height={100}
						width={100}
						alt=''
						className='size-10'
					/>
				</div>
			</div>

			<ResponsiveContainer width='100%' height='70%'>
				<LineChart data={data}>
					<XAxis
						dataKey='percentile'
						type='number'
						domain={[0, 100]}
						ticks={[0, 25, 50, 75, 100]}
						label={{
							value: "Percentile",
							position: "insideBottomRight",
							offset: -5,
						}}
					/>
					<YAxis hide />
					<Tooltip />
					<Line
						type='monotone'
						dataKey='numberOfStudents'
						stroke='#C084FC'
						strokeWidth={2}
						dot={{ r: 3 }}
					/>
					<ReferenceDot
						x={percentile ? percentile : 50}
						y={referenceY}
						r={6}
						fill='#C084FC'
						stroke='black'
						label={({ x, y }) => (
							<text x={x} y={y! - 10} fill='red' textAnchor='middle'>
								Your Percentile ({percentile ? percentile : 50}%)
							</text>
						)}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
