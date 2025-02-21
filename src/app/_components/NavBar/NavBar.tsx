import Image from "next/image";

export default function NavBar() {
	return (
		<nav className='container flex justify-between py-6 border-b border-slate-200'>
			<div className=''>
				<p className='text-[25px] font-extrabold'>WhatBytes</p>
			</div>
			<div className='flex gap-2 px-3 py-2  border-2 border-slate-100 rounded-lg'>
				<div className='rounded-[50%_40%_60%_50%/90%_50%_40%_20%] w-7 h-7 overflow-hidden'>
					<Image
						height={24}
						width={24}
						quality={100}
						priority
						src={"/ProfilePicture.png"}
						alt='profile Image'
						className='size-7'
					/>
				</div>
				<div className=''>
					<p className='font-bold'>Chimaroke Amadi</p>
				</div>
			</div>
		</nav>
	);
}
