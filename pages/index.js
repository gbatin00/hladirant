import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import text from "../public/translations.js";
import Link from "next/link";

export default function Home() {
	let router = useRouter();
	const locale = router.locale;

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
				<div className={styles.header_parent}>
					<header className={styles.header}>
						<nav className={styles.nav}>
							<div className={styles.logo}>LOGO</div>
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
											<Image
												src={`/images/${language.split("-")[0]}.svg`}
												alt=""
												width={25}
												height={25}
											/>
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
					<p className={styles.projectinfo_text}>{projectinfo_text}</p>

					<div className={styles.projectinfo_question}>
						{projectinfo_question2}
					</div>
					<div className={styles.image}>
						<Image
							src="/images/novo 1.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p className={styles.image_descriptor}>{image_descriptor1}</p>
					<div className={styles.image}>
						<Image
							src="/images/pjescani.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p className={styles.image_descriptor}>{image_descriptor2}</p>
					<div className={styles.image}>
						<Image
							src="/images/temperature.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p className={styles.image_descriptor}> {image_descriptor3} </p>

					<div className={styles.projectinfo_question}>
						{projectinfo_question3}
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
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
