import FancyFont from "./FancyFont"
import Button from "./Button"
import Image from "next/image"
import Link from "next/link"


export default function Hero() {
	return <section className="hero h-[100vh] relative">
		<div className="absolute w-full h-full flex justify-center items-center">
			<div>
				<span className="text-sm text-accent inline-block translate-x-[8vw] sm:translate-x-24 mb-6">
					Мы Golden Law
				</span>

				<FancyFont><h1 className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl
						 sm:translate-x-0 mb-6 text-center">
					От идеи до успеха
					<span className="block xs:inline">— шаг за шагом</span>
				</h1></FancyFont>

				<div className="bg-accent w-28 sm:w-40 h-0.5 mx-auto text-center mb-6"></div>

				<p className="text-sm lg:text-base block max-w-[77.5%] mx-auto mb-6">
					Поможем Вашему бизнесу достичь целей с помощью нашего большого опыта и высокого профессионализма
				</p>

				<div className="text-center">
					<Button href="#contact" className="text-sm lg:text-base">
						Получить консультацию
					</Button>
				</div>
			</div>
		</div>
		<div className="absolute bottom-20 left-0 w-full">
			<div className="container"><Image src="abstract.svg" width="54" height="54" alt="" /></div>
		</div>
		<div className="absolute bottom-0 left-1/2 -translate-x-1/2">
			<Link href="#consulting" className="p-10 block">
				<Image src="arrow.svg" alt="Скролл ниже" width="25" height="25"></Image>
			</Link>
		</div>
	</section>
}