import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.15)',
      position: 'fixed',
      zIndex: 2,
      width: '100%',
      top: 0

    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ 
        margin: 0 ,
        fontFamily: 'Josefin Sans'
        }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Lipstech (blog)
        </Link>
        <a href="https://lipstech.com">
         
        </a>
      </h1>
    </div>
  </div>
)

export default Header
