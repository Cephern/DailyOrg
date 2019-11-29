import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Organiser</Link></li>
                <li><NavLink to="/colorPicker">ColorPicker</NavLink></li>
            </ul>
        </nav>
    )
}
