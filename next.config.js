/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  //   esmExternals: "loose",
  // },
  experimental: { appDir: true, esmExternals: "loose" },

  // webpack(config) {
  //   config.experiments = { ...config.experiments, topLevelAwait: true };
  //   return config;
  // },
  env: {
    API_URL: "http://localhost:3000",
    DB_URL: "mongodb://localhost:27017/buyitnow",
    // DB_URL:
    //   "mongodb+srv://kngsoul12:Phungquynh1209@cluster0.hd15ach.mongodb.net/?retryWrites=true&w=majority",
    CLOUD_NAME: "drmebmzet",
    CLOUDINARY_API_KEY: "771151435316644",
    CLOUDINARY_API_SECRET: "kiJsl7GG32av42DGolzYWLX-7tk",
    STRIPE_PUBLIC_KEY:
      "pk_test_51NR7WpK982ce3BRucAc6NF6CcHxEcL78qc8osxMPKEYAFBj08jpIGcjePNsGJeGwGUbpGETv75Qg1n76N7RDImeM004p6u3pga",
    STRIPE_PRIVATE_KEY:
      "sk_test_51NR7WpK982ce3BRubThpQjKGELsT1IMhE5X5KkQpGKexjeMZucb0LqEBXYfnVHVZWt0obw6UQbwRLh0jxVjJQmuY00NQwJfDrY",

    NEXTAUTH_SECRET: "codingwithtranthang",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
