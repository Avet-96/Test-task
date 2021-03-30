import React, {useState} from 'react';

const ContentTop = () => {
    console.log(1)
    let blocks = [
        {id: 1, isOpen: false},
        {id: 2, isOpen: false},
        {id: 3, isOpen: false},

    ]
    const [menu, setOpenMenu] = useState(blocks)

    const openSelect = async (index) => {
        let newData = [
            {id: 1, isOpen: false},
            {id: 2, isOpen: false},
            {id: 3, isOpen: false}
        ]
        newData.forEach(v => v.id === index ? v.isOpen = true : v.isOpen = false)
        setOpenMenu(newData)
    }
    return (
        <div className="container">
            <div className='title title_block m-auto w-50 text-center'>
                <h1>Видеокурсы </h1>
                <p>Выберите категорию делайте фильтр и найдите ваш видеокурс</p>
            </div>
            <div
                className='position-relative
                d-flex align-items-center
                justify-content-center
                flex-column
                flex-sm-row
                 select_options_block mt-5'>
                <div className='d-flex   flex-column
                flex-sm-row'>
                    {menu.map((v, index) => <div className='clickBlock d-flex flex-column'>
                        <div onClick={() => openSelect(v.id)}
                             className='clickBlock select_block d-flex align-items-center justify-content-between'>
                            <span className={!v.isOpen ? 'mr-2 clickBlock' : 'clickBlock active_select '}>Раздел</span>
                            <span
                                className={v.isOpen ? 'active_icon  clickBlock span_animation' : ' clickBlock span_animation '}>
                                <i className="clickBlock fas fa-caret-right"/></span>
                        </div>
                        <div className={v.isOpen ? 'clickBlock active_modal ml-1' : 'clickBlock d-none'}>
                            <span>Терапия</span>
                            <span>Медицина катастроф</span>
                            <span>Хирургия</span>
                            <span>Все</span>
                        </div>
                    </div>)}
                </div>
                <div className='d-flex button_fil  w-25'>
                    <div className=' filter_button'/>
                    <button className='button_filter'>Фильтр</button>
                </div>
            </div>
        </div>
    )
}
export default ContentTop;