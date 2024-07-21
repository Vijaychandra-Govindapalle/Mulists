import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cloudflare-ipfs.com',
              //port: '',
              //pathname: '/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/',
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
               // pathname: '/640/480/nature'
            }
          ],
    }
};

export default nextConfig;
