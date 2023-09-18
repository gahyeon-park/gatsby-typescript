import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevStickers`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Bye the best stickers`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true, // → Gatsby가 우리의 쿼리를 읽고 자동으로 맞는 타입을 생성
  plugins: [],
}

export default config
