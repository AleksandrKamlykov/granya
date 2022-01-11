import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../img/logo/logo-transparent.png'
import '../style.css'

export const Header = () => {

    return (
        <header>
            <div className="logo"><img src={logoHeader} alt='logo' ></img></div>
            <nav>
                <ul className='pages-list'>
                    <li className="nav-item"><Link to='/'>Главная</Link></li>
                    <li className="nav-item"><Link to='/blog'>Блог</Link></li>
                    <li className="nav-item"><Link to='/about'>О нас</Link></li>
                    <li className="nav-item"><Link to='/cart'>Корзина</Link></li>

                </ul>
            </nav>


        </header>
    )
}