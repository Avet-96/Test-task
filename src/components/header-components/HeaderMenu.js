import React from 'react'

const HeaderMenu = () => {
    return (
        <div className='container p-3  '>
            <div className=' header_menu d-flex align-items-center justify-content-between '>
                <h2 className='col-5 mb-0'>ovidas-VIVA</h2>
                <div className='menu_burger   d-xl-none d-block'>
                    <i className="fas fa-bars"/>
                </div>
                <nav className='col-7 d-none  d-xl-block'>
                    <ul className='d-flex align-items-center justify-content-between text-uppercase'>
                        <li><a href="#">О проекте</a></li>
                        <li><a href="#" className='active_link'>Видеокурсы</a></li>
                        <li><a href="#">Мастер-Классы</a></li>
                        <li><a href="#">Лекторы</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default HeaderMenu
