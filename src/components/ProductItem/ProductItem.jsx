import React, { useState } from "react";
import './style.css'
import { useParams } from "react-router-dom";
import { allProducts } from "../data";
import { ModalBuy } from "../ModalBuyClick/ModalBuy";
import { useDispatch } from "react-redux";
import gridSizes from '../../img/photos/sizes.jpeg'

import imgOther1 from '../../img/catalog-test/1.jpg'
import imgOther2 from '../../img/catalog-test/2.jpg'
import imgOther3 from '../../img/catalog-test/3.jpg'
import imgOther4 from '../../img/catalog-test/4.jpg'

export const ProductItem = () => {
    const dispatch = useDispatch()

    const param = useParams();
    const { article } = param;
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [size, setSize] = useState('')

    const openProduct = allProducts.find(elem => elem.article == article);
    const { name, link, sizes, price } = openProduct

    const otherList = [imgOther1, imgOther2, imgOther3, imgOther4]

    function ModalHandler() {
        setIsOpenModal(prev => !prev)
    }

    if (isOpenModal) {
        document.querySelector('body').style.overflow = 'hidden'
    } else document.querySelector('body').style.overflow = 'scroll'

    function addtoCart() {
        const order = { ...openProduct }
        order.size = size
        dispatch({ type: 'addToCart', payload: { order } })
    }
    return (
        <>
            {isOpenModal ? <ModalBuy product={openProduct} closeModal={ModalHandler} /> : null}
            <div className='page-wrapper'>
                <aside>
                    <ul className="other-list">
                        {
                            otherList.map((photo, i) => <li key={i} className="other-item"><img src={photo} alt='другие фото' /></li>)
                        }
                    </ul>
                </aside>
                <div className='main-photo'>
                    <img className='photo' src={link} alt='Основная фотография Товара' />
                </div>

                <div>
                    <article>
                        <h2>{name}</h2>
                        <span className="price"><strong>{price}</strong><small> : uah</small></span>
                        <small>Артикул - {article}</small>
                        <div className="colors-list">

                            <button className="color-btn" style={{ backgroundColor: 'pink' }}></button>
                            <button className="color-btn" style={{ backgroundColor: 'olive' }}></button>

                        </div>
                        <p>Описание товара</p>
                        <p><strong>Состав</strong>: 50% лён, 47% хлопок, 3% эластан</p>
                    </article>
                    <div className='size-wrapper'>


                        <ul className='size-list'>
                            {
                                Object.entries(sizes).map((size, i) => (
                                    <li key={size[0]}>
                                        <input className="radio" value={size[0]} onChange={(e) => setSize(e.target.value)} style={{ visibility: 'hidden', height: 0, margin: 0, padding: 0, position: "absolute" }} type="radio" name="size" id={size[0]} />
                                        <label htmlFor={size[0]} className="btn-size"><strong>{size[0]}</strong></label >

                                    </li>
                                ))
                            }
                        </ul>

                        <img className="grid-sizes" src={gridSizes} alt="Сетка размеров" />
                    </div>
                    <div className="buttons-buy">
                        <button onClick={addtoCart} className="btn-buy">Добавить в корзину</button>
                        <button onClick={ModalHandler} className="btn-buy">Купить в один клик</button>
                    </div>
                </div>
            </div></>
    )

}