const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mubeena",
    image: "/avatar.svg",
    role: "Full stack developer",
    bio: "I develop everything using Javascript.",
    email: "mubeenahamza@gmail.com",
    linkedin: "mubeenadev",
    github: "mubeenadev",
    instagram: "",
  },
  projects: [
    {
      name: `Develop website`,
      href: "https://github.com/mubeena17",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Mubeena",
    description: "welcome to M-log!",
  },

  // CONFIG configration (required)
  // link: "https://morethan-log.vercel.app",
  // // If leave this empty, current year will be used.
  // lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  // ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
