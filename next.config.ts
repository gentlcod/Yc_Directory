import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Config options here as needed
    images: {
        domains: ["www.jsmastery.pro"], // Allowing external images from this domain
    },
    experimantal: {
        ppr: 'incremental'
    },
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: 'bottom-right'
    }
};


export default nextConfig;
