module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ['apichat.jobr.com' ],
    },
    env: {
      BASE_URL: process.env.BASE_URL,
    },
  };
  return nextConfig;
};
