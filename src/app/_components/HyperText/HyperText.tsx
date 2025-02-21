import Image from "next/image";

interface HyperTextProps {
	onUpdateClick: () => void;
}

export default function HyperText({ onUpdateClick }: HyperTextProps) {
	return (
		<div className='flex gap-2 items-center border border-slate-200 rounded-lg py-7 px-2'>
			<Image
				height={100}
				width={100}
				quality={100}
				src={"/HTML5.png"}
				alt='html image'
				className='size-[50px]'
			/>
			<div className=''>
				<p className='font-bold text-[18px]'>Hyper Text Markup Language</p>
				<p className='text-gray-500 font-semibold'>
					Questions: 08 | Duration: 15mins | submitted on 21 February 2025
				</p>
			</div>
			{/* 'Update' button with gradient border */}
			<button
				onClick={onUpdateClick}
				className=' text-white font-bold border-3 rounded-xl bg-clip-border bg-gradient-to-br from-gray-600 to-black p-[3px]'>
				<div className='bg-blue-800 py-[10px] px-5 rounded-lg'>Update</div>
			</button>
		</div>
	);
}
