import FancyFont from "./FancyFont"
import Image from "next/image"
import Link from "next/link"


export default function Header({children}) {
	return <header className="fixed z-30 t-0 l-0 w-full from-background to-transparent z-10">
		<div className="flex justify-between container items-center !px-4 !py-4">
			<Link href="/">
				<div className="flex items-center gap-6">
					<Image src="logo.svg" width="64" height="64" alt="Golden Law" />
					<FancyFont><span className="md:text-xs">Golden Law</span></FancyFont>
				</div>
			</Link>
			<div className="xs:-translate-x-1/2">
			{children}</div>
			<div className={`bg-main w-[6px] h-[6px] rounded-xl opacity-30 -translate-x-0 md:-translate-x-3 ${children ? "hidden sm:block": ""}`}></div>
		</div>
	</header>
}
