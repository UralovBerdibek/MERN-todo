/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4 text-secondary">Beridbek</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link text-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-secondary">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-secondary">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-secondary">About</a></li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar