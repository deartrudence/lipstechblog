import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing'
import PersonCard from "../components/PersonCard";




export default class PersonTemplate extends React.Component {
    render() {
        const person = this.props.pathContext.person;
        const postEdges = this.props.data.allContentfulBlogPost.edges;
        return (
            <div>
                <h3>{`Person ${person}`}</h3>
                {/* <PersonCard author={postEdges.node.author} /> */}
                <PostListing postEdges={postEdges} />
            </div>
        );
    }
}

PersonTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

// export default TagTemplate

export const personQuery = graphql`
  query PersonPage {
		allContentfulBlogPost{
			edges {
				node {
					title
					slug
                    tags
                    author{
                        name
                        email
                        facebook
                        twitter
                        image{
                            file{
                                fileName
                                url
                            }
                        }
                    }
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