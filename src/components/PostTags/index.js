import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
    render() {
        const { tags } = this.props;
        return (
            <div>
                <p>tags:
                {tags &&
                    tags.map(tag => (
                        <Link
                            key={tag}
                            to={`/tags/${_.kebabCase(tag)}`}
                        >
                            <p>{tag}</p>
                        </Link>
                    ))}
                </p>
            </div>
        );
    }
}

export default PostTags;