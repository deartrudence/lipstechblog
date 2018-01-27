import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import Tags from '../components/Tags'
import PostListing from '../components/PostListing'



export default class TagTemplate extends React.Component {
	render() {
		const tag = this.props.pathContext.tag;
		const postEdges = this.props.data.allContentfulBlogPost.edges;
		return (
			<div className="tag-container">
				<h3>{`Posts tagged as "${tag}"`}</h3>
					<link rel="canonical" href={`/tags/${tag}`} />
				<Helmet>
					<title>{`Posts tagged as "${tag}" | `}</title>
				</Helmet>
				<PostListing postEdges={postEdges} />
			</div>
		);
	}
}

TagTemplate.propTypes = {
	data: PropTypes.object.isRequired
}

// export default TagTemplate

export const tagQuery = graphql`
  query TagPage($tag: String) {
		allContentfulBlogPost(filter: {tags:{eq: $tag}}){
			edges {
				node {
					title
					slug
					tags
					description {
            id
            description
					}
					heroImage {
            id
            file {
              url
              fileName
              contentType
						}
          }
				}
			}
		}
  }
  `