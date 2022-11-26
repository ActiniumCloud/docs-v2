// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ActiniumCloud Docs',
  tagline: 'All you need to know to get up and running with ActiniumCloud!',
  url: 'https://docs.actiniumcloud.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/main-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ActiniumCloud', // Usually your GitHub org/user name.
  projectName: 'docs-v2', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ActiniumCloud Docs',
        logo: {
          alt: 'The ActiniumCloud Logo',
          src: 'img/main-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/ActiniumCloud/docs-v2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Common Issues',
                to: '/docs/category/common-issues',
              },
              {
                label: 'General',
                to: '/docs/category/General',
              },
              {
                label: 'Billing',
                to: '/docs/category/billing',
              },
            ],
          },
          {
            title: 'Get Help',
            items: [
              {
                label: 'Discord',
                href: 'https://actiniumcloud.com/discord',
              },
              {
                label: 'Open a myGame Panel Ticket',
                href: 'https://my.actiniumcloud.com/ticket',
              },
              {
                label: 'abuse@actinium.cloud',
                href: 'mailto:abuse@actinium.cloud',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'ActiniumCloud GitHub',
                href: 'https://github.com/ActiniumCloud',
              },
              {
                label: 'Support Centre',
                href: 'https://actiniumcloud.com/customer-support',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ActiniumCloud. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
