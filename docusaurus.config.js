const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Espresso Project',
  tagline: 'TARO IT Department',
  url: 'https://taro-it.github.io/',
  baseUrl: '/Espresso_doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Taro-IT',
  projectName: 'Espresso_doc',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Espresso logo',
        src: '/docs/img/default-monochrome.svg',
        srcDark: '/docs/img/default-monochrome.svg',
      },
      items: [
        {
          href: 'https://taro-it.github.io/Espresso_doc/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taro, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          remarkPlugins: [require('mdx-mermaid')],
          editUrl:
            'https://github.com/Taro-IT/Espresso_doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
