const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
	const {createPage} = boundActionCreators
	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blog-posts.js')
		resolve(
			graphql(`
			{
				allContentfulBlogPost(limit:100){
					edges {
						node {
							id
							slug
						}
					}
				}
			} `).then((result) => {
				if(result.errors){
					alert(result.error)
					reject(result.errors)
				}
				result.data.allContentfulBlogPost.edges.forEach((edge) => {
					createPage({
						path: edge.node.slug,
						component: blogPostTemplate,
						context: {
							slug: edge.node.slug
						}
					})
				})
				return
			})
		)
	})
}