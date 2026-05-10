import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const navItems = [
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'Projects',
            to: '/projects'
        },
        {
            label: 'Hobbies',
            to: '/hobbies'
        }
    ]

    return (
        <header>
            <ul>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}