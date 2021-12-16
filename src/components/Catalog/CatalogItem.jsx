import React from 'react';
import './style.css'
import { Link } from "react-router-dom";

export const CatalogItem = (props) => {
    const { link, name, price, id } = props.productItem

    return (
        <>
            <Link style={{ textTransform: 'none', textDecoration: 'none' }} to={`/shop/${id}`} >
                <div className='catalog-item'>
                    <img src={link} alt='фотография пижамы' />
                    <div className='item-menu'>
                        <h4>{name}</h4>

                        <p>Цена:<strong>{price}</strong>грн.</p>
                    </div>
                </div>
            </Link>
        </>
    )
}