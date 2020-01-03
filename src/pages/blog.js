import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

const Blog = ({data}) => (
  <Layout>
    <SEO title="Блог" />
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/blog/${document.node.url_path}`}>{document.node.title}</Link>
          </h2>
          <p><ReactMarkdown source={document.node.description} /></p>
        </li>
      ))}
    </ul>

  </Layout>
)

export default Blog

export const pageQuery = graphql`
query BlogQuery {
  allStrapiArticle {
    edges {
      node {
        id
        title
        content
        created_at
        description
        url_path
      }
    }
  }
}
`