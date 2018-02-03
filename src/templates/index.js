import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const BlogPost = ({ node }) => {
    let image_classes = `image  + ${node.size}`
    return (
        <div id={node.id} className={image_classes}>
            <img src={node.heroImage.file.url} alt="" />
            <Link
                to={node.slug}
            >
                <div className="overlay">{node.title}</div>
            </Link>
            <div className="background"></div>
        </div>
    )

}
const IndexPage = ({ data, pathContext }) => {
    const { nodes, page, prev, next, pages, total, limit } = pathContext;
    const PaginationLink = props => {
        if(props.to && props.text){
            return <Link to={props.to} text={props.text} />;
        }
        return null;
    }
    return (
        <div id="indexPage" className="wrapper-grid">
            {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} />)}
            <div className="previousPost">
                <PaginationLink to={prev} text="Go to Previous Page" />
            </div>
            <div className="nextPost">
                <PaginationLink to={next} text="Go to Next Page" />
            </div>
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
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

