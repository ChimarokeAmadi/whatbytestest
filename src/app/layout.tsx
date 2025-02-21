import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar/NavBar";
import SideNav from "./_components/SideNav/SideNav";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Whatbytes",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				<NavBar />
				<div className=' container grid grid-cols-[12rem_1fr] h-full gap-12'>
					<SideNav />
					<div>{children}</div>
				</div>
			</body>
		</html>
	);
}
