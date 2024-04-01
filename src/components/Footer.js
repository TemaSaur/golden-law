import FancyFont from "./FancyFont"
import Image from "next/image"
import Link from "next/link"


export default function Footer() {
	return <footer className="py-10 relative text-sm">

		<div className="absolute top-0 left-0 w-full h-32 bg-gradient-in to-background-other"></div>
		<div className="absolute w-full h-[calc(100%-8rem)] bg-background-other top-32"></div>

		<div className="content mt-32 relative">
			<div className="container">
				<div className="first">
					<FancyFont>
						<div className="flex flex-col gap-3">
							<div><Link href="/" className="flex gap-6 items-center"><Image src="logo.svg" alt="" width="32" height="32"/>Golden Law</Link></div>
							<div>Школа трейд эксперт (ШТЭ)</div>
							<div>2024 &copy; Copyright</div>
						</div>
					</FancyFont>
				</div>
			</div>
		</div>
	</footer>
}