import React from 'react'

const Footer = () => {
    return (
        <footer className='footer_bg d-flex justify-content-between'>
            <div className="container d-flex justify-content-between">
                <div className='footer_left '>
                    <div className='footer_logo mb-4'>ovidas-VIVA</div>
                    <p className='mb-4'>Платформа
                        медицинского онлайн
                        обучения</p>
                    <div className="footer_icons">
                        <i className="fab fa-instagram mr-3"/>
                        <i className="fab fa-facebook-square"/>
                    </div>
                </div>
                <div className='footer_right  d-flex   justify-content-between'>
                    <div className='d-flex flex-column'>
                        <h4>Разделы</h4>
                        <a href="#">О проекте</a>
                        <a href="#">Видеокурсы </a>
                        <a href="#">Мастер-Классы</a>
                        <a href="#">Лекторы </a>
                        <a href="#">Контакты </a>
                    </div>

                    <div className='d-flex flex-column'>
                        <h4>Помощь</h4>
                        <a href="#">Конфиденциальность</a>
                        <a href="#">Пользовательское соглашение</a>
                        <a href="#">Вопросы и ответы</a>
                    </div>
                    <div>
                        <h4>Способ оплаты</h4>
                        <div className='payment_method'>
                            <i className="fab fa-cc-visa mr-3"/>
                            <i className="fab fa-cc-mastercard"/>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer