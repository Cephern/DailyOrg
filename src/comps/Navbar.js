import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Organiser</NavLink></li>
                <li><NavLink to="/colorPicker">ColorPicker</NavLink></li>
            </ul>
        </nav>
    )
}
