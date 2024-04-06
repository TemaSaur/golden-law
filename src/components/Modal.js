export default function Modal({ children, isOpen, onClick }) {
	return isOpen &&
		<div
			className="p-6 bg-background/40 backdrop-blur-sm fixed w-full py-10 h-full top-0 left-0 z-30 flex justify-center items-center"
			onClick={e => {e.stopPropagation(); onClick(e);}}>
			<div className="content bg-background-other rounded-xl max-w-[720px] max-h-full relative overflow-y-scroll w-full p-4 sm:p-8 cursor-default" onClick={(e) => {e.stopPropagation()}}>
				{children}

			</div>
		</div>
}