import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'slategray',
            textDecoration: 'none',
          }}
        >
          Lipstech (blog)
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
