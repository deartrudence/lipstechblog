import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing'
import PersonCard from "../components/PersonCard";




export default class PersonTemplate extends React.Component {

	getPostList() {

		const postList = [];
		this.props.data.allContentfulPerson.edges[0].node.blog_post.forEach(blog => {
			postList.push({
				path: blog.slug,
				title: blog.title,
				slug: blog.slug,
				description: blog.description.description,
				imgUrl: blog.heroImage.file.url,
				imgFileName: blog.heroImage.file.fileName,
				tags: blog.tags
			});
		});
		return postList;
	}
	render() {
		const postList = this.getPostList();
		const person = this.props.pathContext.person;
		const postEdges = this.props.data.allContentfulPerson;
		const blogs = this.props.data.allContentfulPerson.edges[0].node.blog_post
		console.log(postEdges)
		return (
			<div>
				<h3>{`Posts by ${person}`}</h3>
				{/* <PersonCard author={postEdges.node.author} /> */}
				<PostListing postList={postList} />
			</div>
		);
	}
}

PersonTemplate.propTypes = {
	data: PropTypes.object.isRequired
}

// export default TagTemplate

export const personQuery = graphql`
  query PersonPage($person: String) {
		allContentfulPerson(filter: {name: {eq: $person}}) {
			edges {
				node{
					name
					blog_post {
						id
						title
						slug
						tags
						description{
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
  }
  `