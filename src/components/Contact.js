import FancyFont from "./FancyFont"
import Image from "next/image"
import Link from "next/link"


export default function Contact() {
	return <section id="contact" className="mt-10">
		<FancyFont>
			<h1 className="text-2xl text-center py-6">
				Контакты
			</h1>
		</FancyFont>

		<div className="container">
			<div className="bg-background-other p-8 max-w-[888px] mx-auto box-shadow rounded-xl">
				Если Вас заинтересовали наши услуги, или у Вас появились вопросы — свяжитесь с нами:
				<div className="phone flex items-center my-2">
					<Image src="/phone.png" width="24" height="24" alt="" />
					<span className="px-2 pr-4">Телефон:</span>
					<FancyFont><Link href="tel:+73433191002">+7 (343) 319-10-02</Link></FancyFont>
				</div>

				<div className="phone flex items-center my-2">
					<Image src="/mail.png" width="24" height="24" alt="" />
					<span className="px-2 pr-4">E-Mail:</span>
					<FancyFont><Link href="mailto:konsult.work@mail.ru">konsult.work@mail.ru</Link></FancyFont>
				</div>
				
				<div className="phone flex items-center my-2">
					<Image src="/home.png" width="24" height="24" alt="" />
					<span className="px-2 pr-4">Адрес:</span>
					<FancyFont>г. Екатеринбург, Проспект Ленина, д 69, корп.2</FancyFont>
				</div>
			</div>
		</div>
	</section>
}
