import React from "react";
import Link from 'gatsby-link'
import { withPrefix } from "gatsby-link";
import PropTypes from 'prop-types';
import PostPreview from "../PostPreview";

class PostListing extends React.Component {
    getPostList() {
        
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
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
        const postList = this.getPostList();
        const isHomepage = location.pathname === withPrefix("/");
        return (
            <div className="md-grid md-grid--no-spacing md-cell--middle">
                <div className="md-grid md-cell--8 mobile-fix">
                    {postList.map(post => (
                        <PostPreview key={post.slug} postInfo={post} />
                    ))}
                </div>
            </div>
        );
    }
}

PostListing.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostListing;
