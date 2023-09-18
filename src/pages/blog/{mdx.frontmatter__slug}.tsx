import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPost {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPost) {
  // console.log(data, children);
  const image = getImage(data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!);
    
  return (
    <Layout title="">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
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
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPost) => <Seo title={data.mdx?.frontmatter?.title!} />