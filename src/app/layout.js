import { main } from "./fonts";
import "./globals.css";

export const metadata = {
	title: "Golden Law",
	description: "Центр консультирования малого и среднего бизнеса",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<head>
				<link rel="shortcut icon" href="/logo.svg" />
			</head>
			<body className={`${main.className} scroll-smooth bg-background text-main`}>{children}</body>
		</html>
	);
}
