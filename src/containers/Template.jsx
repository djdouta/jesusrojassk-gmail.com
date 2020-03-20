import React from 'react'

import logo from '../assets/MitrolLogo.svg'
import { Link } from 'react-router-dom';

const Template = (props) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light mb-3">
                <a className="navbar-brand" href="#">
                    <img src={logo} height="40px" alt="Mitrol" />
                    Mitrol
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item display-inline">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item display-inline">
                        <Link className="nav-link" to="/test1">Test 1</Link>
                    </li>
                    <li className="nav-item display-inline">
                        <Link className="nav-link" to="/test2">Test 2</Link>
                    </li>
                </ul>
            </nav>
            <section className="container">
                {props.children}
            </section>
        </>
    )
}

export default Template