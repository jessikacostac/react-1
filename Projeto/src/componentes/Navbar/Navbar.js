import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
            <Link className="navbar__logo" to="/">
                <Logo />
            </Link>

            <Menu usuario={props.usuario} onSairClick={props.onSairClick} />
        </header>
    )
}

export default Navbar