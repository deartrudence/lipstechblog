import React from 'react'
import Link from 'gatsby-link'

const Tags = ({node}) => (
    <div>
        <div>
            <h1 style={{
                margin: 0,
                fontFamily: 'Gruppo'
            }}>
                <Link
                    to={node.slug}
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    tag ${node.title}
        </Link>
            </h1>
        </div>
    </div>
)

export default Tags