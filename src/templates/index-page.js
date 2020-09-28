import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import "../assets/scss/style.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
      <div>
          {Image ? (
            <Img 
              fluid={Image} 
              alt={frontmatter.title + ' headshot'}
              className="featured-image"
            />
          ) : ""}
        </div>
        <div>
          <h1 className="title">{frontmatter.title}</h1>
          <p className="tagline">{frontmatter.tagline}</p>
          <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
          <div className="icons-container">
          
          <a href="https://github.com/alexvcs" 
          target="_blank" rel="noopener noreferrer">
          <FaGithub className='git-icon' color='grey' size='4rem' /></a>

          <a  href="https://www.linkedin.com/in/alexcurtisslep/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='linked-icon' color='grey' size='4rem' /></a>

          <a href="mailto:alexcurtisslep@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className='email-icon' color='grey' size='4rem' /></a>
          </div>
        </div>
      </div>
		</Layout>
	)
}

export default HomePage
