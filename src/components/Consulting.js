import FancyFont from "./FancyFont"
import BigCoolHeading from "./BigCoolHeading"
import ConsultingCard from "./ConsultingCard"
import GoodList from "./GoodList"
import Image from "next/image"


export default function Consulting() {
	return <section id="consulting" className="relative mt-12 scroll-mt-20">
		<div className="consulting__short z-10 relative">
			<FancyFont>
				<h1 className="text-2xl text-center py-6">
					Консалтинг
				</h1>
			</FancyFont>
			<p className="max-w-[720px] mx-auto px-8 mb-16">
				Мы предлагаем консультационные услуги по разным направлениям для малого и среднего бизнеса
			</p>

			<div className="container cards grid md:grid-cols-2 gap-6 md:gap-10 !max-w-[1040px]">
				<ConsultingCard href="#finance" src="/stock.png" title="Финансовый сектор" text="Фондовый рынок, валюта, золото" />
				<ConsultingCard href="#outsourcing" src="/outsourcing.png" title="Аутсорсинг" text="Маркетинг, юриспруденция, бухгалтерский учет" />
				<ConsultingCard href="#banking" src="/bank.png" title="Банковский сектор" text="Счета, документы" />
				<ConsultingCard href="#business" src="/business.png" title="Бизнес-консультации" text="Общий аудит, сопровождение" />
			</div>
		</div>
		
		<div className="finance relative mt-12 scroll-mt-20" id="finance">
			<div className="absolute top-0 left-0 w-full h-32 bg-gradient-in to-background-other"></div>
			<div className="absolute w-full h-[calc(100%-8rem)] bg-background-other top-32"></div>
			<div className="absolute -bottom-32 left-0 w-full h-32 bg-gradient-out to-background-other"></div>

			<div className="finance__content z-10 relative">
				<div className="container">
					<div className="grid lg:grid-cols-2">
						<div className="content">

							<BigCoolHeading number="01" text="Финансовые консультации" />
							<p className="max-w-[720px]">— профессиональная помощь в управлении личными и корпоративными финансами с ипользованием рынка ценных бумаг
							</p>
							<p className="mt-8">Бесплатные услуги</p>

							<FancyFont>
								<h3 className="text-xl mt-10 mb-3">Торговый час</h3>
							</FancyFont>
							<GoodList>
								<li>Освоите торговый терминал</li>
								<li>Поймете основные стратегии инвестирования</li>
								<li>Разберетесь в движении цен</li>
							</GoodList>

							<FancyFont>
								<h3 className="text-xl mt-10 mb-3">Торговый сигнал</h3>
							</FancyFont>
							<GoodList>
								<li>Получите готовые актуальные значения</li>
								<li>Узнаете, на чем сейчас можно заработать</li>
								<li>Поймете как новости влияют на финансовый рынок</li>
							</GoodList>

							<FancyFont>
								<h3 className="text-xl mt-10 mb-3">Мастер-класс</h3>
							</FancyFont>
							<p>Введение в анализ финансового сектора</p>
						</div>
						<Image src="/graph2.jpg" width="500" height="300" alt="" className="md:relative lg:top-44 mt-6 block mx-auto" />
					</div>
					
					<div className="grid lg:grid-cols-2 gap-10">
						<Image src="/dude.jpg" width="500" height="300" alt="" className="hidden md:relative md:top-20 mt-6 lg:block mx-auto" />
						<div className="content">
							<p className="mt-8">Платные услуги</p>

							<FancyFont>
								<h3 className="text-xl mt-10 mb-3">Школа трейд эксперт (ШТЭ)</h3>
							</FancyFont>
							<GoodList>
								<li>Освоите тактики и стратегии покупки и продажи на рынке </li>
								<li>Поймете, как и куда инвестировать, чтобы получить ощутимую прибыль</li>
								<li>Обучитесь инструментам для анализа для прогнозирования движения цен</li>
								<li>Узнаете тонкости, особенности работы на одном из трех вариантов рынков:</li>
							</GoodList>
							<div className="flex justify-between mt-6 max-w-[600px] flex-wrap">
								<div className="flex flex-col items-center gap-2">
									<Image src="/currency.png" alt="" width="50" height="50" />
									<p className="text-xs lg:text-sm inline-block max-w-[12vw] text-center">Валютный рынок</p>
								</div>
								
								<div className="flex flex-col items-center gap-2">
									<Image src="/company.png" alt="" width="50" height="50" />
									<p className="text-xs lg:text-sm inline-block max-w-[12vw] text-center">Фондовый рынок</p>
								</div>
								
								<div className="flex flex-col items-center gap-2">
									<Image src="/gold.png" alt="" width="50" height="50" />
									<p className="text-xs lg:text-sm inline-block max-w-[12vw] text-center">Товарно-сырьевой рынок</p>
								</div>
							</div>

							<FancyFont>
								<h3 className="text-xl mt-10 mb-3">Аналитика</h3>
							</FancyFont>
							<GoodList>
								<li>Получите профессиональный анализ доходности</li>
							</GoodList>

							<FancyFont>
								<h3 className="text-xl mt-10 mb-3">Услуги трейдинга</h3>
							</FancyFont>
							<p>Воспользуетесь преимуществами торговли на бирже без опыта и необходимости обучаться; при помощи наших экспертов</p>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>

		<div className="outsourcing container scroll-mt-20" id="outsourcing">
			<BigCoolHeading number="02" text="Аутсорсинг" />
			<p className="max-w-[720px]">— передача организацией определённых видов или функций производственной или предпринимательской деятельности другой компании на основании договора</p>

			<div className="max-w-[800px]">
				<FancyFont>
					<h3 className="text-xl mt-10 mb-3">Маркетинг</h3>
				</FancyFont>
				<GoodList>
					<li>
						<p className="pb-2">Автоматизация задач</p>
						<p className="text-sm">Автоматизация наиболее сложных экспертных задач, которые на текущий момент решаются вручную, позволяя компаниям выйти на новый уровень операционной эффективности, получив готовое масштабируемое решение</p>
					</li>
					<li>
						<p className="pb-2">Оптимизация процессов</p>
						<p className="text-sm">Оптимизация процессов подготовки финансовой и управленческой отчетности посредством ее автоматизации, чтобы значительно сократить сроки ее выпуска, а также контролировать соответствие учета правилам МСФО и РСБУ</p>
					</li>
					<li>
						<p className="pb-2">Управление рисками</p>
						<p className="text-sm">Управление рисками в автоматическом режиме, отслеживание требований регуляторов и правил внутренних политик, а также обеспечение соответствия деятельности компаний применимым нормам и правилам</p>
					</li>
				</GoodList>
				
				<FancyFont>
					<h3 className="text-xl mt-10 mb-3">Юриспруденция</h3>
				</FancyFont>
				<GoodList>
					<li>
						<p className="pb-2">Правовой аудит</p>
						<p className="text-sm">Проведение комплексного правового анализа деятельности организации для проверки соответствия действующему законодательству</p>	
					</li>
					<li>
						<p className="pb-2">Регистрация</p>
						<p className="text-sm">Подготовка нужных документов, получение разрешений и лицензий, открытие счетов, регистрация в нужных органах</p>	
					</li>
				</GoodList>
				
				<FancyFont>
					<h3 className="text-xl mt-10 mb-3">Бухгалтерский учет</h3>
				</FancyFont>
				<GoodList>
					<li>
						<p className="pb-2">Эффективное решение</p>
						<p className="text-sm">Эффективное решение проблем, возникающих в учете, избежание ошибок и претений со стороны налоговых органов</p>	
					</li>
				</GoodList>
			</div>
		</div>

		<div className="banking container scroll-mt-20" id="banking">
			<BigCoolHeading number="03" text="Банковский сектор" />
			<p className="max-w-[720px]">— важная часть финансовой системы, в которую входят разнообразные финансово-кредитные организации</p>
			<p className="py-6"><span className="text-accent">Главная задача</span> аудита в банковском секторе — установление достоверности бухгалтерской отчетности кредитных учреждений и соответствия совершенных кредитными учреждениями операций действующим законодательным нормам</p>
			<Image src="/documents.svg" width="720" height="720" alt="" className="mx-auto" />
		</div>

		<div className="business container scroll-mt-20" id="business">
			<BigCoolHeading number="04" text="Бизнес-консультации" />
			<p className="max-w-[720px]">— услуги по предоставлению советов и рекомендаций для развития и оптимизации бизнеса</p>
		</div>
	</section>
}