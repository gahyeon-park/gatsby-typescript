import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function AboutUs() {
  return (
    <Layout title="About us">
      <p>We are the happies sticker store.</p>
    </Layout>
  );
}

// export function Head() {
//   return <title>About us</title>; // 브라우저 <head>에 들어감
// }

export const Head = () => <Seo title="About us" />;
