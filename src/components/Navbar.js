import Link from "next/link"


export default function Navbar() {
	return <nav className="Navbar flex justify-between fixed z-20 left-1/2 top-20 container -translate-x-1/2">
		<div className="absolute right-0 flex flex-col h-[50vh] top-[20vh] justify-between -translate-x-4 md:-translate-x-8">

			<Link className="rotate-90 origin-right inline-block hover:underline transition-all hover:text-main/75" href="/#consulting">Консалтинг</Link>
			<Link className="rotate-90 origin-right inline-block hover:underline transition-all hover:text-main/75" href="/#about">О компании</Link>
			<Link className="rotate-90 origin-right inline-block hover:underline transition-all hover:text-main/75" href="/news">Новости</Link>
		</div>
	</nav>
}