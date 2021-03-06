import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import './style.css'

export const Cart = () => {
    const order = useSelector(state => state.cartReducer.orders)
    const dispatch = useDispatch()
    const { request, loading } = useHttp()
    function removeItem(article, size) {
        dispatch({ type: 'removeFromCart', payload: { article, size } })
    }
    function inc(article, size) {
        dispatch({ type: 'increment', payload: { article, size } })
    }
    function dec(article, size) {
        dispatch({ type: 'decrement', payload: { article, size } })
    }

    async function submitForm(e) {
        let name = e.target.name.value
        let surName = e.target.surName.value
        let phone = e.target.phone.value
        let paymentMethod = e.target.paymentMethod.value

        const res = `
       Новый заказ !!! 
       Имя:${name} 
       Фамилия: ${surName}
       Номер: ${phone}
       Способ оплаты: ${paymentMethod}
       `
        e.preventDefault();

        await request(`https://api.telegram.org/bot1831614888:AAE41QAzdDu67eYpu-vLPrny0lb4Oy46_TE/sendMessage?chat_id=359806396&text=${res}`)
    }

    function sum(arr) {
        let res = 0
        arr.forEach(e => res += (e.price * e.count))
        return res
    }

    return (
        <div className='cart-wrapper'>

            <div>
                <ul className='order-list'>
                    {
                        order.map(elem => (<li className='order-item' key={elem.size + elem.article}>
                            <img className='photo-cart' src={elem.link} alt='Фотография пижамы' />
                            {elem.name}
                            <span><small>{elem.size}</small></span>
                            <div className='counter'><button onClick={() => inc(elem.article, elem.size)}>+1</button>{elem.count}<small>шт.</small><button onClick={() => dec(elem.article, elem.size)} >-1</button></div>
                            <span>{elem.price} <small>грн.</small></span>
                            <button onClick={() => removeItem(elem.article, elem.size)}>X</button></li>))
                    }
                </ul>
                {order.length > 0 ?
                    (
                        <div className='total'>

                            <span>Итого: </span>
                            <span>
                                <strong>
                                    {
                                        order.length > 1
                                            ? sum(order)
                                            : order[0].count * order[0].price
                                    }
                                </strong>
                            </span>

                        </div>

                    )
                    : 'У вас нет товарова в коризине'}
            </div>

            {
                order.length > 0 ? (
                    <div >
                        <form onSubmit={submitForm} className={"formCart"} >
                            <input placeholder='Введите имя' className={"inputCart"} type="text" name="name" id="name" />
                            <input placeholder='Введите фамилию' className={"inputCart"} type="text" name="surName" id="surName" />
                            <input placeholder='Введите номер телефона' className={"inputCart"} type="tel" name="phone" id="phone" />
                            <div className="radioBtnsCart">
                                <input type="radio" name="paymentMethod" id="card" value="card" />
                                <label htmlFor="card">Полная предоплата на карту</label>
                                <input type="radio" name="paymentMethod" id="np" value="Nova Posta" />
                                <label htmlFor="np">Наложенный платёж Новой Почтой</label>
                            </div>

                            <button className={"submitCart"} type="submit">Заказать</button>
                        </form>

                    </div>
                ) : null
            }


        </div >
    )
}