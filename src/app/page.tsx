import QuickStats from "./_components/QuickStats/QuickStats";
import Syllabus from "./_components/Syllabus/Syllabus";
import QAnalysis from "./_components/QAnalysis/QAnalysis";
import StateContainer from "./_components/StateContainer/StateContainer";

export const studentPercentile = 45;

// Example data for the graph
export const graphData = [
	{ numberOfStudents: 3, percentile: 0 },
	{ numberOfStudents: 8, percentile: 15 },
	{ numberOfStudents: 20, percentile: 15 },
	{ numberOfStudents: 30, percentile: 30 },
	{ numberOfStudents: 40, percentile: 45 },
	{ numberOfStudents: 45, percentile: 60 },
	{ numberOfStudents: 90, percentile: 50 },
	{ numberOfStudents: 60, percentile: 70 },
	{ numberOfStudents: 40, percentile: 80 },
	{ numberOfStudents: 30, percentile: 85 }, // Student's score
	{ numberOfStudents: 25, percentile: 90 },
	{ numberOfStudents: 10, percentile: 97 },
	{ numberOfStudents: 5, percentile: 100 },
];

export default function Home() {
	return (
		<div className='pt-9'>
			<p className='text-slate-600 font-semibold mb-8 text-[18px]'>
				Skill Test
			</p>
			<div className=''>
				<div className=' '>
					<StateContainer />
				</div>
			</div>
		</div>
	);
}
