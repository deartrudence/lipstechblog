import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PersonCard extends Component {
    render() {
        const { author } = this.props;
        return (
            <div className="person">
                <Link to={`/people/${_.kebabCase(author.name)}`}>
                    <img src={author.image.file.url} alt={author.name} style={{ width: '150px' }} />
                    <p>{author.name}</p>
                </Link>
                <ul>
                    <li>{author.facebook}</li>
                    <li>{author.twitter}</li>
                </ul>
            </div>
        );
    }
}

export default PersonCard;