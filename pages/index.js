import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import text from "../public/translations.js";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
	let router = useRouter();
	const locale = router.locale;
	const { theme, setTheme } = useTheme();

	const subtitle = getText(locale, "subtitle");
	const projectinfo_text = getText(locale, "projectinfo_text");
	const image_descriptor1 = getText(locale, "image_descriptor1");
	const image_descriptor2 = getText(locale, "image_descriptor2");
	const image_descriptor3 = getText(locale, "image_descriptor3");
	const projectinfo_question1 = getText(locale, "projectinfo_question1");
	const projectinfo_question3 = getText(locale, "projectinfo_question3");
	const projectinfo_question2 = getText(locale, "projectinfo_question2");

	const languages = router.locales;
	const languageMap = {
		"en-US": "English",
		"hr-HR": "Hrvatski",
		"de-DE": "Deutsch",
	};
	return (
		<div>
			<main className={styles.main}>
				<div className="header_parent samsung_internet">
					<header className={styles.header}>
						<nav className={styles.nav}>
							<div className={styles.logo}>
								<Image
									src="/images/logo.png"
									alt="logo"
									width={32}
									height={32}
								/>
							</div>

							<div className={styles.lang_menu}>
								<div className={styles.selected_lang}>
									<Image
										src={`/images/${locale.split("-")[0]}.svg`}
										alt=""
										width={25}
										height={25}
									/>
									{languageMap[locale]}
								</div>
								<ul>
									{languages.map((language) => (
										<li key={language} className={styles.listItems}>
											<Link href={router.asPath} locale={language}>
												<a>
													<Image
														src={`/images/${language.split("-")[0]}.svg`}
														alt=""
														width={25}
														height={25}
													/>
												</a>
											</Link>
											<Link href={router.asPath} locale={language}>
												{languageMap[language]}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</nav>
					</header>

					<div className={styles.headline}>HLADIRANT</div>
					<div className={styles.subtitle}>{subtitle}</div>
				</div>

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1440 320">
					<path
						fill="#87AF73"
						fillOpacity="1"
						d="M0,192L80,208C160,224,320,256,480,272C640,288,800,288,960,261.3C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
					></path>
				</svg>

				<div className={styles.projectinfo}>
					<div className={styles.projectinfo_question}>
						{projectinfo_question1}
					</div>
					<p
						className={
							theme == "dark"
								? styles.projectinfo_text_dark
								: styles.projectinfo_text
						}
					>
						{projectinfo_text}
					</p>

					<div className={styles.projectinfo_question}>
						{projectinfo_question2}
					</div>
					<div className={styles.image}>
						<Image
							src="/images/bottle.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p
						className={
							theme == "dark"
								? styles.image_descriptor_dark
								: styles.image_descriptor
						}
					>
						{image_descriptor1}
					</p>
					<div className={styles.image}>
						<Image
							src="/images/pjescani.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p
						className={
							theme == "dark"
								? styles.image_descriptor_dark
								: styles.image_descriptor
						}
					>
						{image_descriptor2}
					</p>
					<div className={styles.image}>
						<Image
							src="/images/temperature.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p
						className={
							theme == "dark"
								? styles.image_descriptor_dark
								: styles.image_descriptor
						}
					>
						{" "}
						{image_descriptor3}{" "}
					</p>

					<div className={styles.projectinfo_question}>
						{projectinfo_question3}
					</div>
					<div className={styles.projectinfo_question}>
						<Image
							src="/images/karta.png"
							alt="karta"
							width="600px"
							height="300px"
						/>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				Powered by Gordana Batini?? && coffee
				<br /> Site design / logo ?? 2022 All rights reserved.
			</footer>
		</div>
	);
}
const getText = (locale, keyName) => {
	return locale === "en-US"
		? text[keyName + "_en"]
		: locale === "hr-HR"
		? text[keyName + "_hr"]
		: locale === "de-DE"
		? text[keyName + "_de"]
		: "";
};
Home.theme = "dark";
