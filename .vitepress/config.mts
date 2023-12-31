import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ko-KR',
  title: "발로봇",
  titleTemplate: "VALOBOT",
  cleanUrls: true,
  description: "한국인들의 발로란트 디스코드 봇",
  head: [
    [
      "meta",
      {"name": "theme-color", "content": "#ff0000"}
    ],
    [
      "meta",
      {"name": "og:image", "content": "https://valobot.norhu1130.dev/logo.png"}
    ]
  ],
  markdown: {
    container: {
      tipLabel: '팁',
      infoLabel: '정보',
      warningLabel: '주의',
      dangerLabel: '경고',
      detailsLabel: '자세히 보기',
    }
    // https://vitepress.dev/guide/markdown.html#custom-container
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '목차',
    },
    footer: {
      message: 'Team DoubleEight의 ❤️로 만들어졌어요.',
    },
    notFound: {
      title: '길을 잃었어요!',
      quote: "여긴 어둡고 무섭네요..",
      linkText: '집으로 돌아가기'
    },
    nav: [
      { text: '홈', link: '/' },
      { text: '문서', link: '/docs/welcome' }
    ],

    sidebar: [
      {
        text: 'VALOBOT 문서',
        items: [
          { text: '시작하기', link: '/docs/welcome' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/48MjPnbHJ3' }
    ]
  }
})
