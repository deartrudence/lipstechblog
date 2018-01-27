import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostTags from "../components/PostTags";
import PersonCard from "../components/PersonCard";

class BlogPost extends Component {
	render(){
		const {title} = this.props.data.contentfulBlogPost
		const { childContentfulBlogPostBodyTextNode  } = this.props.data.contentfulBlogPost
		const {tags} = this.props.data.contentfulBlogPost
		const {author} = this.props.data.contentfulBlogPost
		const {id} = this.props.data.contentfulBlogPost
		const {heroImage} = this.props.data.contentfulBlogPost
		return (
			<div id={id}>
				<img src={heroImage.file.url} alt={heroImage.file.fileName}/>
				<h1>{title}</h1>
				<PersonCard author={author} />
				<div dangerouslySetInnerHTML={{ __html: childContentfulBlogPostBodyTextNode.childMarkdownRemark.html }} />
				<PostTags tags={tags} />
			</div>
		)
	}
}

BlogPost.propTypes = {
	data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
	query blogPostQuery($slug: String!){
		contentfulBlogPost(slug: {eq: $slug}){
			id
			title
			slug
			tags,
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
				heroImage {
            id
            file {
              url
              fileName
              contentType
            }
          }
			childContentfulBlogPostBodyTextNode {
				 id
				 childMarkdownRemark {
					id
					html
				}
			}
		}
	}
`