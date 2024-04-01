import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Consulting from "@/components/Consulting"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function Home() {
	return <>
		<Header />
		<Navbar />

		<Hero />
		<main>
			<Consulting />
			<About />
			<Contact />
		</main>

		<Footer />
	</>;
}
