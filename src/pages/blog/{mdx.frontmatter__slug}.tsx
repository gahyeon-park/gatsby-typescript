import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";

interface IBlogPost {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPost) {
  console.log(data, children);
  
  return (
    <Layout title="">
      <div>{children}</div>
    </Layout>
  )
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug }}) {
      id
      body
      frontmatter {
        author
        category
        date
        title
        slug
      }
    }
  }
`;

export const Head = ({ data }: IBlogPost) => <Seo title={data.mdx?.frontmatter?.title!} />