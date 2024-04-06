/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '192.168.0.5',
				port: '3000',
			},
			{
				protocol: 'https',
				hostname: 'golden-law-api.netlify.com',
				port: '',
				pathname: '**',
			}
		]
	}
};

export default nextConfig;
