// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '엣지 AI 컴퓨팅 서버 시스템 : OpenOn-EdgeX',
  tagline: '엣지 AI 학습 및 지능의 동시 제공이 가능한 시스템 SW 기술 개발',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cccr-rnd2026.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/edge.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cccr-rnd2026', // Usually your GitHub org/user name.
  projectName: 'edge.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cccr-rnd2026/edge.github.io.git',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cccr-rnd2026/edge.github.io.git',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'EdgeAI Project',
        logo: {
          alt: 'EdgeAI Logo',
          src: 'img/logo.png',
        },
        items: [
          // 원하는 메뉴 구성으로 변경
          {to: '/#about', label: 'About', position: 'left'},
          {to: '/#technology', label: 'Technology', position: 'left'},
          {to: '/#features', label: 'Features', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide', // Tutorial 대신 Doc으로 변경
          },
          {to: '/#contact', label: 'Contact', position: 'left'},
          {
            href: '#',
            label: 'ENG',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
              title: 'Menu', 
            items: [
              { label: 'Home', to: '/' },
              { label: 'About', to: '/#about' },
              { label: 'Technology', to: '/#technology' },
              { label: 'Features', to: '/#features' },
              { label: 'Guide', to: '/docs/intro' },
              { label: 'Contact', to: '/#contact' },
            ],
          },
        ],
        copyright: `
          Copyright © ${new Date().getFullYear()} EdgeAI Project, Inc. Built with Docusaurus.<br/>
          <span style="font-size: 0.85rem; color: #94a3b8; display: block; margin-top: 15px; line-height: 1.5;">
            This project is supported by IITP grant funded by the Korea government(MSIT) (No. 2025-25441574, Development of System Software for Simultaneous Provision of Edge AI Training and Intelligence)
          </span>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
