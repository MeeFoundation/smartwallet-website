import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

export const site = "https://smartwallet.mee.foundation/";
export const meeFoundation = "https://mee.foundation/";
export const github = "https://github.com/MeeFoundation/smartwallet-website";
export const discord =
  "https://discord.com/channels/1275848491964436491/1275848492413223025";
export const sharedConfig = {
  title: "Mee Smartwallet",
  logo: {
    light: "/src/assets/logo-light.svg",
    dark: "/src/assets/logo-dark.svg",
    replacesTitle: true,
  },
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
        Sidebar: "./src/components/starlight/Sidebar.astro",
        EditLink: "./src/components/starlight/EditLink.astro",
        Header: "./src/components/starlight/DocsHead.astro",
        PageFrame: "./src/components/starlight/PageFrame.astro",
      },
    }),
    tailwind(),
  ],
});
