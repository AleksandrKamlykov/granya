import React from 'react';
import { Catalog } from '../Catalog/Catalog';
import { Link, animateScroll as scroll } from "react-scroll";
import '../style.css'

export const Home = () => {


    return (
        <>
            <div className='photo-bg'>
                <h2>Go to shop</h2>
                <button className='btn-shop'>
                    <Link
                        //activeClass="active"
                        to="catalog"
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                    >Перейти
                    </Link>
                </button>
            </div>

            <main>
                {/* <h2>Mood board</h2>
                <section className='mood-board'>
                    <div className='first-post'></div>
                    <div className='second-post'></div>
                </section> */}
                <h2>Каталог товаров</h2>

                <Catalog />
            </main>
        </>
    )
}