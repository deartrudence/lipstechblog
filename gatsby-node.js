const path = require('path')
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({graphql, boundActionCreators}) => {
	const {createPage} = boundActionCreators
	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blog-posts.js')
		const tagPageTemplate = path.resolve('src/templates/tags.js')
		const personPageTemplate = path.resolve('src/templates/people.js')
		resolve(
			graphql(`
			{
				allContentfulBlogPost(limit:100){
					edges {
						node {
							id
							slug
							tags
							author{
								name
							}
						}
					}
				}
			} `).then((result) => {
				if(result.errors){
					alert(result.error)
					reject(result.errors)
				}
				createPaginatedPages({
					edges: result.data.allContentfulBlogPost.edges,
					createPage: createPage,
					pageTemplate: "src/templates/index.js",
					pageLength: 5,
					pathPrefix: "",
					context: {}
				})
				const tagList = []
				const peopleList = []
				result.data.allContentfulBlogPost.edges.forEach((edge) => {
					if(edge.node.tags) {
						edge.node.tags.forEach(tag => {
							tagList.push(tag)
						})
					}
					if(edge.node.author){
						peopleList.push(edge.node.author.name)
					}
					console.log(peopleList)
					createPage({
						path: edge.node.slug,
						component: blogPostTemplate,
						context: {
							slug: edge.node.slug
						}
					})
				})
				// return
				tagList.forEach(tag => {
					createPage({
						path: `/tags/${_.kebabCase(tag)}`,
						component: tagPageTemplate,
						context: {
							tag
						}
					})
				})
				peopleList.forEach(person => {
					createPage({
						path: `/people/${_.kebabCase(person)}`,
						component: personPageTemplate,
						context: {
							person
						}
					})
				})
			})
		)
	})
}