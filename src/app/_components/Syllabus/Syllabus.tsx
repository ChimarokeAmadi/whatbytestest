import ProgressBar from "../ProgressBar/ProgressBar";
const progressData = [
	{
		name: "HTML Tools, Forms, History",
		completion: 80,
		deepBg: "bg-blue-600",
		lightBg: "bg-blue-100",
		textColor: "text-blue-600",
	},
	{
		name: "Tags & references in HTML",
		completion: 60,
		deepBg: "bg-orange-400",
		lightBg: "bg-orange-100",
		textColor: "text-orange-600",
	},
	{
		name: "Tables & references in HTML",
		completion: 24,
		deepBg: "bg-red-600",
		lightBg: "bg-red-100",
		textColor: "text-red-600",
	},
	{
		name: "Tables & CSS Basics",
		completion: 96,
		deepBg: "bg-green-600",
		lightBg: "bg-green-100",
		textColor: "text-green-600",
	},
];
export default function Syllabus() {
	return (
		<div className='w-full border border-slate-200 p-5 rounded-lg'>
			<p className='font-bold text-[18px]'>Syllabus Wise Analysis</p>
			{progressData.map((data) => (
				<ProgressBar
					key={data.name}
					name={data.name}
					completion={data.completion}
					deepBg={data.deepBg}
					lightBg={data.lightBg}
					textColor={data.textColor}
				/>
			))}
		</div>
	);
}
