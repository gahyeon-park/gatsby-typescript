import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, PageProps } from "gatsby";

function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  console.log(data);
  
  return (
    <Layout title="Hello welcom to my blog!">
      <ul>
        {data.allFile.nodes.map((file, i) => <li key={i}>{file.name}</li>)}
      </ul>
      <p>The most recent news from my shop.</p>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
