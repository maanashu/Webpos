module.exports = {
  reactStrictMode: false,
  env: {
      BASE_URL: process.env.BASE_URL,
    },
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
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};