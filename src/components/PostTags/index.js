import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import './index.css';

class PostTags extends Component {
    render() {
        const { tags } = this.props;
        return (
            <div>
                <p>
                {tags &&
                    tags.map(tag => (
                        <Link
                            key={tag}
                            className="tag"
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