import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <nav className='nav-bar'>
        <div className='nav'>
            <Link href='/'>
            <a >Home</a>
            </Link>
            
        </div>
    </nav>
  )
}

export default Header