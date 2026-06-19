

const nextConfig = {
	transpilePackages: ["@bytel/trilogy-react", "@trilogy-ds/react", "@trilogy-ds/locales"],
	output: "export",  // <=== enables static exports
	reactStrictMode: true,
};

export default nextConfig;
