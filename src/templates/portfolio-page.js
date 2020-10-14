import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query PortfolioQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
      frontmatter {
        title
      }
    }
  }
`

const Content = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
      title={frontmatter.title}
      />
      <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
      <div>
        <p>React is cool, more portfolio jazz to come</p>
      </div>
    </Layout>
  )
}

export default Content