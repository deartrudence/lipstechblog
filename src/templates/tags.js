import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import Tags from '../components/Tags'
import PostListing from '../components/PostListing'



export default class TagTemplate extends React.Component {
	getPostList() {

		const postList = [];
		this.props.data.allContentfulBlogPost.edges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.slug,
				title: postEdge.node.title,
				slug: postEdge.node.slug,
				description: postEdge.node.description.description,
				imgUrl: postEdge.node.heroImage.file.url,
				imgFileName: postEdge.node.heroImage.file.fileName,
				tags: postEdge.node.tags
			});
		});
		return postList;
	}
	render() {
		const tag = this.props.pathContext.tag;
		const postList = this.getPostList();
		const postEdges = this.props.data.allContentfulBlogPost.edges;
		console.log(postList)
		return (
			<div className="tag-container">
				<h3>{`Posts tagged as "${tag}"`}</h3>
					<link rel="canonical" href={`/tags/${tag}`} />
				<Helmet>
					<title>{`Posts tagged as "${tag}" | `}</title>
				</Helmet>
				<PostListing postList={postList} />
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