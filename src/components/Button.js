import Link from 'next/link'
import { twMerge } from "tailwind-merge"

export default function Button({children, href, className=""}) {
	return <Link className={twMerge("inline-block bg-transparent py-[0.7em] px-[1.8em] rounded-xl border-1 border-main", className)} href={href}>
		{children}
	</Link>
}