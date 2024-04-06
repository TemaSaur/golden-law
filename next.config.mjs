/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '192.168.0.5',
				port: '3000',
			}
		]
	}
};

export default nextConfig;
