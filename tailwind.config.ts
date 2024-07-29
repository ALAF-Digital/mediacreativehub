import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "tw-",
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
