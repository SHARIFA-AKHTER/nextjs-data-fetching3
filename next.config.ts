import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // images: {
  //   remotePatterns: [new URL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxENAMoAGBECTni9MRiv3ftth3YASuQ3ICNOWMDAe99AQ72kMpu0Tir0cAoVuV0JmiDrE&usqp=CAU")],
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
       pathname: "/**",
     
      },
    ],
    
  },
};

export default nextConfig;
