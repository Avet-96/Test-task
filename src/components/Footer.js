import React from 'react'
import imag from '../assets/immages/footer-images/Group.svg'
import imag3 from '../assets/immages/footer-images/Group 3.svg'
import imag2 from '../assets/immages/footer-images/imag2.svg'

const Footer = () => <footer className='footer_bg d-flex justify-content-between'>
            <div className="container d-flex justify-content-between">
                <div className='footer_left '>
                    <div className='footer_logo mb-4'>ovidas-VIVA</div>
                    <p className='mb-4'>Платформа <br/>
                        медицинского онлайн<br/>
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
                    <div className='bancs_block'>
                        <h4>Способ оплаты</h4>
                        <div className='payment_method d-flex justify-content-between align-items-center'>
                            <img src={imag} alt=""/>
                            <img src={imag2} alt=""/>
                            <img src={imag3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


export default Footer
