import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from "react-markdown"
import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <ReactMarkdown source={data.strapiArticle.content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
    }
  }
`