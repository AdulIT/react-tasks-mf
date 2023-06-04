import React from 'react'
import cl from './Header.module.css'
import imgSrc from '../assets/download.png'

const Header = () => {
    return (
        <header className={cl.header}>
            <img className={cl.img} src={imgSrc} alt="image" />
            <nav>
                navigation
            </nav>
        </header>
    )
}

export default Header