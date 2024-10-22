import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Head from 'next/head';
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

  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    // Constructing the dynamic URL for Open Graph tags
    const url = `https://pcw-bughunters.vercel.app/${defaultLocale === locale ? asPath : `/${locale}${asPath}`}`;

    return (
      <Head>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'PCW Bug Hunters'} />
        <meta property="og:description" content={frontMatter.description || 'Work in Progress'} />
      </Head>
    );
  },
};

export default config;
