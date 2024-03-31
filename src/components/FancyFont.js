import { secondary } from "@/app/fonts";

export default function FancyFont({children}) {
	return <span className={secondary.className}>{children}</span>
}