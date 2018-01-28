import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";
import FontAwesome from 'react-fontawesome';

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
                    <li>
                        <a href={`https://twitter.com/${author.twitter}`} target="_blank">
                            <FontAwesome
                                name='facebook'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </a>
                    </li>
                    <li>
                        <a href={`https://twitter.com/${author.twitter}`} target="_blank">
                            <FontAwesome
                                name='twitter'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </a>
                    </li>
                    
                    <li>
                        <a href={`https://instagram.com/${author.twitter}`} target="_blank">
                            <FontAwesome
                                name='instagram'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </a> 
                    </li>
                </ul>
            </div>
        );
    }
}

export default PersonCard;