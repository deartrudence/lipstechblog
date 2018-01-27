import React from "react";
import Link from 'gatsby-link'
import { withPrefix } from "gatsby-link";
import PostTags from "../PostTags";

class PostPreview extends React.Component {
    render(){
        const { postInfo } = this.props;
        return(
            <div>
                <Link to={withPrefix('/' + postInfo.slug)}>
                    <img src={postInfo.imgUrl} alt={postInfo.imgFileName} />
                    <h3 >{postInfo.title}</h3>
                    <p >{postInfo.description}</p>
                </Link>
                <PostTags tags={postInfo.tags} />
            </div>
        )
    }
}

export default PostPreview;