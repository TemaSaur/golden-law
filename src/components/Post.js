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

	let src
	let length = 0
	if (post.images) {
		if (typeof post.images == "string") {
			src = post.images
			length = 1
		}
		else if (post.images.length == 1) {
			src = post.images[0]
			length = 1
		} else {
			length = post.images.length
		}
	}


	return <div className="max-w-[720px] w-full mx-auto rounded-xl bg-background-other/50 p-5 pt-8 sm:p-10 border-1 border-accent/20">
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
			{length == 1 &&
				<div className="image relative overflow-hidden">
					<Image className="max-h-[360px] w-auto mx-auto relative z-10" src={"/" + src} width={640} height={360} alt="" />
					<Image className="w-full mx-auto absolute top-0 blur-xl" src={"/" + src} width={640} height={360} alt="" />
				</div>
			}
			{length > 1 &&
				<div className="flex gap-2">
					{post.images.map((image, i) =>
						<Image className="max-h-[300px] max-w-full mx-auto object-contain z-10 basis-0 grow" src={"/" + image} width={640} height={360} alt="" key={i} />
					)}
				</div>
			}
		</div>
	</div>
}