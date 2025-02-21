"use client";
import { DocumentIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{
		name: "Dashboard",
		href: "#",
		icon: ChartBarIcon,
	},
	{
		name: "Skill Test",
		href: "#",
		icon: TrophyIcon,
	},
	{
		name: "Internship",
		href: "#",
		icon: DocumentIcon,
	},
];

export default function SideNav() {
	const [activeLink, setActiveLink] = useState<string | null>("Skill Test");

	const handleActiveLink = (activeLink: string) => {
		setActiveLink(activeLink);
	};

	return (
		<nav className='border-r border-slate-200 h-screen pt-12 relative'>
			<ul className=' absolute top-[48px] left-[-1.5rem] w-full  flex flex-col  h-full text-lg'>
				{navLinks.map((link) => {
					const Icon = link.icon;
					const isActive = activeLink === link.name;

					return (
						<li key={link.name} className=''>
							<Link
								onClick={() => handleActiveLink(link.name)}
								href={link.href}
								className={`flex py-5 items-center  gap-3 pl-[1.5rem] rounded-r-full font-bold hover:bg-slate-50  ${
									activeLink === link.name
										? "bg-slate-50 text-blue-500"
										: "text-gray-600"
								}`}>
								<Icon
									className={`h-5 w-5 transition-colors duration-300 ${
										isActive ? "text-blue-500" : "text-gray-600"
									}`}
								/>

								<span>{link.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
