import React from 'react';
import './style.css'

export const ModalBuy = ({ closeModal, product }) => {
    const { name, link, sizes, price, article } = product


    function submitForm(e) {
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

        fetch(`https://api.telegram.org/bot1831614888:AAE41QAzdDu67eYpu-vLPrny0lb4Oy46_TE/sendMessage?chat_id=359806396&text=${res}`)
    }
    return (
        <div className="backdoor">
            <div className={"modal"}>
                <button onClick={closeModal} className={"close"}>X</button>
                <div className="bush">
                    <h3>{name}</h3>
                    <small>артикул# {article}</small>
                    <p><strong>{price} грн.</strong></p>
                </div>
                <form id='formBuy' onSubmit={submitForm} className={"form"} >
                    <input placeholder='Введите имя' className={"inputModal"} type="text" name="name" id="name" />
                    <input placeholder='Введите фамилию' className={"inputModal"} type="text" name="surName" id="surName" />
                    <input placeholder='Введите номер телефона' className={"inputModal"} type="tel" name="phone" id="phone" />
                    <div className="radioBtns">
                        <input type="radio" name="paymentMethod" id="card" value="card" />
                        <label htmlFor="card">Полная предоплата на карту</label>
                        <input type="radio" name="paymentMethod" id="np" value="Nova Posta" />
                        <label htmlFor="np">Наложенный платёж Новой Почтой</label>
                    </div>

                    <button className={"submit"} type="submit">Заказать</button>
                </form>
            </div>
        </div>
    )
}