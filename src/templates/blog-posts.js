import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render(){
        const {title} = this.props.data.contentfulBlogPost
			const { childContentfulBlogPostBodyTextNode  } = this.props.data.contentfulBlogPost
				const {tags} = this.props.data.contentfulBlogPost
				const {author} = this.props.data.contentfulBlogPost
        return (
            <div>
                <h1>{title}</h1>
								<p>{author.name}</p>
								<p>{tags}</p>
						<div dangerouslySetInnerHTML={{ __html: childContentfulBlogPostBodyTextNode.childMarkdownRemark.html }} />
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
			title
			slug
			tags,
			author {
				id
				name
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