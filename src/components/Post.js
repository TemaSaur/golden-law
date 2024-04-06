"use client"
import { useState } from "react"
import FancyFont from "./FancyFont"
import Image from "next/image"

const getSmallText = text => {
	const THRESHOLD = 270;

	if (text.length <= THRESHOLD)
		return text
	const cut = text.slice(0, THRESHOLD)
	return cut.slice(0, cut.lastIndexOf(' ')) + '...'
}


const getParagraphs = text => (text.value + "").split('\n').map((p, i) =>
	<p className="pb-3" key={i}>{p}</p>)

export default function Post({post}) {
	const smallText = getSmallText(post.text)
	const fullText = post.text
	const changeText = smallText != fullText

	const toggleText = () => {
		if (text.small)
			return setText({small: false, value: fullText})
		return setText({small: true, value: smallText})
	}

	const getButton = () => {
		return <a className="text-accent cursor-pointer" onClick={toggleText}>
			Показать {text.small ? "полностью" : "меньше"}
		</a>
	}

	const [text, setText] = useState({small: true, value: smallText})

	const date = new Date(0)
	date.setUTCSeconds(post.datetime)
	const dateString = `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth()+1)).slice(-2)}.${date.getFullYear()}`

	return <div className="max-w-[720px] mx-auto rounded-xl bg-background-other/50 p-5 pt-8 sm:p-10 border-1 border-accent/20">
		<div className="top flex justify-between items-center mb-7">
			<FancyFont>
				<h2 className="text-lg xs:text-2xl">{post.title}</h2>
			</FancyFont>
			<span className="text-accent text-xs xs:text-sm">{dateString}</span>
		</div>

		<div className="mb-6 text-sm sm:text-base">
			{getParagraphs(text)}
			{changeText && getButton()}
		</div>

		<div className="images">
			{post.images && typeof post.images == "string" &&
				<div className="image relative overflow-hidden">
					<Image className="max-h-[360px] w-auto mx-auto relative z-10" src={"https://golden-law-api.netlify.com/" + post.images} width={640} height={360} alt="" />
					<Image className="w-full mx-auto absolute top-0 blur-xl" src={"https://golden-law-api.netlify.com/" + post.images} width={640} height={360} alt="" />
				</div>
			}
			{post.images && typeof post.images === "array" && post.images.length <= 1 &&
				<div className="image relative overflow-hidden">
					<Image className="max-h-[360px] w-auto mx-auto relative z-10" src={"https://golden-law-api.netlify.com/" + post.images[0]} width={640} height={360} alt="" />
					<Image className="w-full mx-auto absolute top-0 blur-xl" src={"https://golden-law-api.netlify.com/" + post.images[0]} width={640} height={360} alt="" />
				</div>
			}{post.images && typeof post.images === "array" && post.images.length > 1 &&
				<div className="flex gap-2 flex-wrap">
					{post.images.map((image, i) =>
						<Image className="max-h-[360px]  w-auto mx-auto relative z-10" src={"https://golden-law-api.netlify.com/" + image} width={640} height={360} alt="" key={i} />
					)}
				</div>
			}
		</div>
	</div>
}