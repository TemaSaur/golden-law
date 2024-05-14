import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import FancyFont from '@/components/FancyFont'
import Post from '@/components/Post'
import Footer from '@/components/Footer'
import posts from './data.json'


export default function News() {
	return <>
		<Header>
			<FancyFont>
				<h1 className="text-2xl">Новости</h1>
			</FancyFont>
		</Header>
		<Navbar />

		<main className="container flex flex-col gap-10">
			{posts.length > 0 ?
				posts.reverse().map(post =>
					<Post key={post.title} post={post} />
				)
				: <div className="text-center">Загрузка...</div>
			}
		</main>
		<Footer />
	</>
}
