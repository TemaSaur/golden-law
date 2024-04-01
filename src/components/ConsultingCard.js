import Image from "next/image"
import Link from "next/link"


export default function ConsultingCard({href, src, title, text}) {
	return <Link href={href}>
		<div className="card relative py-5 pl-8 pr-6 bg-background-other/50 rounded-2xl box-shadow">
			<Image src={src} alt="" width="32" height="32" className="absolute -left-5" />
			<div className="title text-lg xs:text-2xl mb-4">{title}</div>
			<div className="text text-xs xs:text-sm text-main/80">{text}</div>
		</div>
	</Link>
}