// "use client"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Vacancy from "@/components/Vacancy";
import FancyFont from "@/components/FancyFont";
import vacancies from './data.json'

export default function Vacancies() {
	return <>
		<Header>
			<FancyFont>
				<h1 className="text-2xl">Вакансии</h1>
			</FancyFont>
		</Header>
		<Navbar />

		<main className="container flex flex-col gap-10">
			{
				vacancies.length > 0 ? vacancies.map((vacancy, i) =>
					<Vacancy key={i} vacancy={vacancy}/>
				)
				: <div className="mx-auto">Загрузка...</div>
			}
		</main>
		<Footer />
	</>
}