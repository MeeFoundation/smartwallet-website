import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

export const site = "https://smartwallet.mee.foundation/";
export const meeFoundation = "https://mee.foundation/";
export const github = "https://github.com/MeeFoundation/smartwallet-website";
export const discord = "https://discord.gg/V4vC5zsZ";
export const sharedConfig = {
  title: "Mee Smartwallet",
  logo: {
    light: "/src/assets/logo-light.svg",
    dark: "/src/assets/logo-dark.svg",
    replacesTitle: true,
  },
};
export const header = {
  logoLink: meeFoundation,
  links: [
    {
      name: "Projects",
      link: `${meeFoundation}projects/`,
      id: "projects",
    },
    {
      name: 'Businesses',
      link: `${meeFoundation}businesses/`,
      id: 'businesses',
    },
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about",
    },
  ],
  rightLinks: [
    {
      name: "Join us",
      link: discord,
      icon: "discord",
      target: "_blank",
      id: "discord",
    },
  ],
  footerLinks: [
    {
      link: `${meeFoundation}privacy-policy/`,
      name: "Privacy",
      id: "privacy-policy",
    },
    {
      link: "/docs/",
      name: "Docs",
      id: "docs",
    },
  ],
};
export const footer = {
  links: [
    {
      link: "https://x.com/mee_foundation",
      icon: "twitter-x",
      target: "_blank",
    },
    {
      link: github,
      icon: "github",
      target: "_blank",
    },
    {
      link: discord,
      icon: "discord",
      target: "_blank",
    },
  ],
  rightLinks: [
    {
      name: "Projects",
      link: `${meeFoundation}projects/`,
      id: "projects",
    },
    {
      name: 'Businesses',
      link: `${meeFoundation}businesses/`,
      id: 'businesses',
    },
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about",
    },
    {
      link: `${meeFoundation}privacy-policy/`,
      name: "Privacy",
      id: "privacy-policy",
    },
    {
      link: "/docs/",
      name: "Docs",
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  site: site,
  integrations: [
    starlight({
      ...sharedConfig,
      disable404Route: true,
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl:
          "https://github.com/meefoundation/smartwallet-website/edit/main/",
      },
      social: {
        github: github,
      },
      customCss: process.env.NO_GRADIENTS
        ? []
        : [
            "/src/assets/landing.css",
            "/src/styles/base.css",
            "bootstrap-icons/font/bootstrap-icons.css",
          ],
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "Users",
          items: [
            {
              label: "Common",
              autogenerate: { directory: "docs/users/smartwallet" },
            },
          ],
        },
        {
          label: "Developers",
          items: [
            {
              label: "Common",
              autogenerate: {
                directory: "docs/developers/smartwallet",
              },
            },
          ],
        },
      ],
      components: {
        Sidebar:
          "./node_modules/mee-components/src/components/starlight/Sidebar.astro",
        EditLink:
          "./node_modules/mee-components/src/components/starlight/EditLink.astro",
        PageFrame:
          "./node_modules/mee-components/src/components/starlight/PageFrame.astro",
        Footer:
          "./node_modules/mee-components/src/components/starlight/Footer.astro",
        Header: "./src/components/DocsHead.astro",
      },
    }),
    tailwind(),
  ],
});
