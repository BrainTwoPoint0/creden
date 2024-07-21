import React from 'react'
import { NavigationMenuDemo } from './NavbarMenu'

export default function NavBar() {
    return (
        <nav className='container flex p-6 justify-between'>
            <h1 className="font-bold text-3xl">Creden</h1>
            <NavigationMenuDemo />
        </nav>
    )
}
