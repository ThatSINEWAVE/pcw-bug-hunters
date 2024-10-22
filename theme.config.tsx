import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>PCW Bug Hunters</span>,
  project: {
    link: 'https://github.com/ThatSINEWAVE/pcw-bug-hunters',
  },
  chat: {
    link: 'https://discord.gg/2nHHHBWNDw',
  },
  docsRepositoryBase: 'https://github.com/ThatSINEWAVE/pcw-bug-hunters/tree/main',
  footer: {
    text: 'Made by SINEWAVE',
  },

  // Add the head function here for custom meta tags
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PCW Bug Hunters" />
      <meta property="og:description" content="Work in Progress" />
    </>
  )
}

export default config;
