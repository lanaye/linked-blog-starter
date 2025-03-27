import { DefaultSeoProps } from "next-seo";

const description = "Host your second brain with NextJS"
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "Chosen",
  defaultTitle: "Chosen",
  description,

  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: 'Chosen',
    description,
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon.png',
      sizes: '16x16'
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/favicon.ico"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;
