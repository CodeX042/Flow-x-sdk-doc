import { PageRoutes } from "@/lib/pageroutes";

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://flow-x-landing-page.vercel.app/"
    external: true,
  }
];

export const GitHubLink = {
  href: "https://github.com/CodeX042/flow-x.git",
};
