import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function IndexPage() {
  return (
    <Layout title="Welcom to DevStickers">
      <div></div>
    </Layout>
  );
}

// export function Head() {
//   return <title>DevStickers</title>; // 브라우저 <head>에 들어감
// }

export const Head = () => <Seo title="Home" />;
