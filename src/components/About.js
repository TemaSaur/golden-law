import FancyFont from "./FancyFont"


export default function About() {
	return <section id="about" className="mt-10 scroll-mt-20">
		<FancyFont>
			<h1 className="text-2xl text-center py-6">
				О компании
			</h1>
		</FancyFont>

		<div className="content container">
			<FancyFont>
				<div className="text-accent ml-[7%] text-xl">Golden Law — это:</div>
			</FancyFont>

			<div className="text ml-[21%] leading-6">
				<p className="pb-2">Комплексное сопровождение малого и среднего бизнеса</p>
				<p className="pb-2">Два офиса, в Екатеринбурге и Уфе</p>
				<p className="pb-2">Перспективная команда профессионалов</p>
				<p className="pb-2">Бесплатная круглосуточная техническая поддержка 24/7</p>
			</div>
		</div>
	</section>
}