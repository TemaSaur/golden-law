export default function GoodList({children, chill}) {
	return <ul className={`tick-list flex flex-col gap-2 ${chill && 'chill'}`}>
		{children}
	</ul>
}