import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

function Blog() {
  return (
    <Layout title="Hello welcom to my blog!">
      <p> The most recent news from my shop. </p>
    </Layout>
  );
}

export default Blog;

export const Head = () => <Seo title="Blog" />;
