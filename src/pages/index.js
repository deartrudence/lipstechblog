import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const BlogPost = ({node}) => {
  let image_classes = `image  + ${node.size}`
  return (
    <div id={node.id} className={image_classes}>
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
  <div id="indexPage" className="wrapper-grid">
    {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} /> )}
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allContentfulBlogPost (
      filter: {node_locale: {eq: "en-US"}}
      sort: { order: DESC, fields: [publishDate] }
  ) {
      edges {
        node {
          id
          size
          title 
          slug
          publishDate
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

