import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
}

export default config
  head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'PCW Bug Hunters'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Work in Progress'}
        />
      </>
    )
  }
}