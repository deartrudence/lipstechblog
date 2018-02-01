import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostTags from "../components/PostTags";
import PersonCard from "../components/PersonCard";
import './blog-post.css'

class BlogPost extends Component {
	render(){
		const {title} = this.props.data.contentfulBlogPost
		const { childContentfulBlogPostBodyTextNode  } = this.props.data.contentfulBlogPost
		const {tags} = this.props.data.contentfulBlogPost
		const {author} = this.props.data.contentfulBlogPost
		const {id} = this.props.data.contentfulBlogPost
		const {heroImage} = this.props.data.contentfulBlogPost
		const {publishDate} = this.props.data.contentfulBlogPost
		const {size} = this.props.data.contentfulBlogPost
		let image_classes = `image individual + ${size}`
		return (
			<div id={id}>
				<h2 className="title">{title}</h2>
				<p>{publishDate}</p>
				<div className={image_classes}>
					<img src={heroImage.file.url} alt={heroImage.file.fileName}/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: childContentfulBlogPostBodyTextNode.childMarkdownRemark.html }} />
				<PersonCard author={author} />
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
		contentfulBlogPost(
			slug: {eq: $slug}
		){
			id
			title
			slug
			tags
			size
			publishDate(formatString: "MMMM DD, YYYY")
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