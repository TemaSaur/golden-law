"use client"
import { useState } from "react"
import FancyFont from "./FancyFont"
import GoodList from "./GoodList"
import Modal from "./Modal"


export default function Vacancy({vacancy}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function killModal() {
		setModalIsOpen(false);
	}

	const getDescription = (description) => {
		const elements = []
		let list = []
		let i = 0
		for (let line of description.split('\n')) {
			++i
			if (line[0] == '#')
				elements.push(<FancyFont key={i}>
					<h3 className="text-lg pt-6 pb-2">{line.substring(1)}</h3>
				</FancyFont>)
			else if (line.length == 0) {
				elements.push(<p key={i} className="mb-2"></p>)
			}
			else if (line[0] == '[') {
				list = []
			}
			else if (line[0] == '-') {
				list.push(line.substring(1))
			}
			else if (line[0] == ']') {
				elements.push(<GoodList key={i} chill={true}>
					{list.map((item, j) =>
						<li key={j}>{item}</li>
					)}
				</GoodList>)
			}
			else elements.push(<p key={i}>{line}</p>)
		}
		
		return elements.map(e => e)
	}

	return <a className="max-w-[720px] w-full mx-auto rounded-xl bg-background-other/50 p-5 pt-8 sm:p-10 border-1 border-accent/20 cursor-pointer" onClick={() => setModalIsOpen(true)}>
		<FancyFont>
			<h2 className="text-lg xs:text-2xl mb-4">{vacancy.title}</h2>
		</FancyFont>
		<p className="text-lg mb-4">{vacancy.pay}</p>
	
		<div className="flex gap-8">
			<div className="tags flex gap-3">
				{vacancy.tags.map((tag, i) =>
					<span className="bg-main/10 p-1 px-2 text-xs rounded-md" key={i}>{tag}</span>
				)}
			</div>
			{/* <span className="inline-block text-main/70 pointer-events-none">подробнее...</span> */}
		</div>
		<Modal isOpen={modalIsOpen} onClick={killModal}>
			<button onClick={killModal} className="p-4 text-lg scale-x-125 right-2 top-1 absolute">x</button>
			<FancyFont>
				<h2 className="text-lg xs:text-2xl mb-4 mr-8">{vacancy.title}</h2>
			</FancyFont>
			<p className="text-lg mb-4">{vacancy.pay}</p>
			<div className="description text-base -mt-2">
				{getDescription(vacancy.description)}
			</div>
		</Modal>
	</a>
}