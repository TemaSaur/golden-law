import FancyFont from "./FancyFont"


export default function BigCoolHeading({number, text}) {
	return <FancyFont>
		<div className="relative">
			<h2 className="text-[120px] opacity-15 absolute -left-6 pointer-events-none">{number}</h2>
			<span className="block text-2xl pt-12 mb-6">{text}</span>
		</div>
	</FancyFont>
}