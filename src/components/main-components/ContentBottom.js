import React from 'react';

const ContentBottom = () => {
    return (
        <div className='container '>
            <h2>Хотите быть на связи </h2>
            <h2>и узнавать о новых курсах?</h2>
            <div className='d-flex flex-column flex-sm-row align-items-center justify-content-between mt-5'>
                <div className='telegram d-flex align-items-center'><i className="fab fa-telegram"/>Подписаться
                    на <br/> Телеграм-канал
                </div>
                <div className='d-flex  w-50 input_block mt-4 mt-sm-0'>
                    <input aria-label="Адрес электронной почты" placeholder='Адрес электронной почты'
                           className='content_bottom_input' type="email"/>
                    <div className='content_bottom_btn d-flex justify-content-center align-items-center'><i
                        className="fas fa-paper-plane"/></div>
                </div>

            </div>
        </div>
    )
}

export default ContentBottom
