import React from 'react'

const LeftMenu = (prop) => {
    return (
        <div className={prop.open ? 'left_menu' : 'clos_menu'}>
            <div className='menu_header pt-4 pb-4 d-flex justify-content-between align-items-center'>
                <h2 className='mb-0 pl-4 '>ovidas-VIVA</h2>
                <span className='closed_menu' onClick={prop.close}>X</span>
            </div>
            <nav className='pl-4 pr-4'>
                <ul className='d-flex flex-column  text-uppercase'>
                    <li><a href="#">О проекте</a></li>
                    <li><a href="#" className='active_link'>Видеокурсы</a></li>
                    <li><a href="#">Мастер-Классы</a></li>
                    <li><a href="#">Лекторы</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default LeftMenu