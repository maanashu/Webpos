module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: [
        "apichat.jobr.com",
        "images.unsplash.com",
        "jobrs3bucket.s3.amazonaws.com",
        "i.pinimg.com",
        "media.istockphoto.com",
        "apiuserservice.jobr.com",
        "jobrs3bucket.s3.amazonaws.com",
        "i.pinimg.com",
        "randomuser.me",
        "www.shutterstock.com",
        "target.scene7.com",
        'parivaargroup.com',
        'flagcdn.com',
        'upload.wikimedia.org',
        "cloudfront-us-east-2.images.arcpublishing.com"
      ],
    },
    env: {
      BASE_URL: process.env.BASE_URL,
    },
  };
  return nextConfig;
};
