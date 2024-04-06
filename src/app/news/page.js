"use client"
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import FancyFont from '@/components/FancyFont'
import Post from '@/components/Post'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'


export default function News() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://golden-law-api.netlify.app/api/news')
			.then(res => res.json())
			.then(posts => setPosts(posts))
	}, [])

	return <>
		<Header>
			<FancyFont>
				<h1 className="text-2xl">Новости</h1>
			</FancyFont>
		</Header>
		<Navbar />

		<main className="container flex flex-col gap-10">
			{posts.length > 0 ?
				posts.map(post =>
					<Post key={post.title} post={post} />
				)
				: <div className="text-center">Загрузка...</div>
			}
		</main>
		<Footer />
	</>
}
