import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const BlogPost = ({node}) => {
  let image_classes = `image  + ${node.size}`
  return (
    <div className={image_classes}>
      <img src={node.heroImage.file.url} alt=""/>
      <Link
        to={node.slug}
      >
        <div className="overlay">{node.title}</div>
      </Link>
      <div className="background"></div>
    </div>
  )

}
const IndexPage = ({data}) => (
  <div className="wrapper-grid">
    {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} /> )}
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          size
          title 
          slug
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

