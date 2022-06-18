/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en-US", "hr-HR", "de-DE"],
		defaultLocale: "en-US",
	},
};

module.exports = nextConfig;
