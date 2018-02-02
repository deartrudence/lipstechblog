import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";
import FontAwesome from 'react-fontawesome';
import './index.css'

class PersonCard extends Component {
	render() {
		const { author } = this.props;
		return (
			<div className="person">
				<Link to={`/people/${_.kebabCase(author.name)}`} className="person-link">
					<img src={author.image.file.url} alt={author.name}  />
				</Link>
				<div className="person-info">
					<Link to={`/people/${_.kebabCase(author.name)}`} className="person-name"> 
						<p style={{fontFamily: "Lato", fontWeight: '700'}}>{author.name}</p>
					</Link>
					<ul className="social-icons">
						<li>
							<a href={`https://twitter.com/${author.twitter}`} target="_blank">
								<FontAwesome
									name='facebook'
									size='lg'
									style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
								/>
							</a>
						</li>
						<li>
							<a href={`https://twitter.com/${author.twitter}`} target="_blank">
								<FontAwesome
									name='twitter'
									size='lg'
									style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
								/>
							</a>
						</li>
						
						<li>
							<a href={`https://instagram.com/${author.twitter}`} target="_blank">
								<FontAwesome
									name='instagram'
									size='lg'
									style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
								/>
							</a> 
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default PersonCard;