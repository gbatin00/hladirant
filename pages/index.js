import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
	let router = useRouter();
	let subtitle =
		router.locale === "en-US"
			? "Learn how we keep the city of Split cool"
			: router.locale === "hr-HR"
			? "Saznaj kako hladimo grad Split"
			: "";

	return (
		<div>
			<main className={styles.main}>
				<div className={styles.header_parent}>
					<div className={styles.top_header_parent}>
						<div className={styles.top_subtitle}>LOGO</div>
						<div className={styles.subtitle}></div>
					</div>

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
						What is the Hladirant project?
					</div>
					<p className={styles.projectinfo_text}>
						The Hladirant Project is an innitiative to create more open and cool
						spaces in the city of Split. It is a plan to make the summer heat
						easier to bear by providing a built in cooler through out the city.
					</p>

					<div className={styles.projectinfo_question}>
						What is some general information I need to know?
					</div>
					<div className={styles.image}>
						<Image
							src="/images/novo 1.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p className={styles.image_descriptor}>The water is safe to drink</p>
					<div className={styles.image}>
						<Image
							src="/images/pjescani.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p className={styles.image_descriptor}>
						The device sprays water mist every 30 seconds
					</p>
					<div className={styles.image}>
						<Image
							src="/images/temperature.svg"
							alt="hladirant"
							width={128}
							height={128}
						/>
					</div>
					<p className={styles.image_descriptor}>Stay cool and refreshed</p>

					<div className={styles.projectinfo_question}>
						Where can I find these devices?
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
