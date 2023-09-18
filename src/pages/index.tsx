import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title="Welcom to DevStickers">
      <StaticImage src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80" alt="stickers on the wall" />
    </Layout>
  );
}

// export function Head() {
//   return <title>DevStickers</title>; // 브라우저 <head>에 들어감
// }

export const Head = () => <Seo title="Home" />;
