import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, PageProps, Link } from "gatsby";

function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);
  
  return (
    <Layout title="Hello welcom to my blog!">
      <section>
        {
          data.allMdx.nodes.map((post, i) => 
          <article key={i}>
            <Link to={`/blog/${post.frontmatter?.slug}`}>
              <h3>{post.frontmatter?.title}</h3>
              <h4>{post.frontmatter?.author} in: {post.frontmatter?.category}</h4>
              <span>{post.frontmatter?.date}</span>
              <hr />
              <p>{post.excerpt}</p>
            </Link>
          </article>
          )
        }
      </section>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          category
          title
          date(formatString: "YYYY.MM.DD")
          author
          slug
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
