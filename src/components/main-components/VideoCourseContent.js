import React, {useEffect, useRef, useState} from 'react';

let blocks = [
    {
        id: 1,
        isOpen: false,
        styles: 'select_block_one',
        checkSelect: '',
        isActive: false,
        name: 'Раздел', data: [
            {id: 1999, title: 'Терапия'},
            {id: 20, title: 'Медицина катастроф'},
            {id: 3489, title: 'Хирургия'},
            {id: 4, title: 'Все'}]
    },
    {
        id: 2,
        isOpen: false,
        isActive: false,
        styles: 'select_block_to',
        checkSelect: '',
        name: 'Лектор', data: []
    },
    {
        id: 3,
        isOpen: false,
        isActive: false,
        styles: 'select_block_tre', checkSelect: '',
        name: 'Категория видеокурса', data: [
            {id: 7, title: 'Базовый'},
            {id: 5, title: 'Продвинутый'},
            {id: 18, title: 'Все'}
        ]
    },
]
const VideoContentTop = () => {
    const [menu, setOpenMenu] = useState(blocks)
    const wrapperRef = useRef(null);

    const openSelect = (index) => {
        setOpenMenu(blocks.map(list => {
            if (list.id === index) {
                list.isOpen = true
                list.isActive = true
            } else {
                list.isOpen = false
                if (!list.checkSelect.length) {
                    list.isActive = false
                }
            }
            return list
        }))
    }
    const getSelect = (id, title) => {
        setOpenMenu(prev => blocks.map(list => {
            if (list.id === id) {
                list.checkSelect = title
                if (list.checkSelect.length > 0) {
                    list.isActive = true
                }
            }
            list.isOpen = false
            return list
        }))

    }
    const closed = () => setOpenMenu(blocks.map(list => {
        if (list.checkSelect === '') {
            list.isActive = false
        }
        list.isOpen = false
        return list
    }))

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            closed()
        }
    };


    return (
        <div>
            <div className='title title_block m-auto w-50 text-center'>
                <h1>Видеокурсы </h1>
                <p>Выберите категорию делайте фильтр и найдите ваш видеокурс</p>
            </div>
            <div ref={wrapperRef}>
                <div className='position-relative
                d-flex align-items-center
                justify-content-center
                flex-column
                flex-sm-row
                select_options_block mt-5'

                >
                    <div className='d-flex flex-column flex-sm-row'>
                        {menu.map((v) => <div className='clickBlock d-flex flex-column mb-1'
                                              key={v.id}
                                              onClick={() => openSelect(v.id)}
                        >
                            <div className={`clickBlock select_block d-flex align-items-center ${!v.isOpen || v.checkSelect? 'justify-content-between' : 'justify-content-end'} ${v.styles}`}>
                            <span className={v.checkSelect !== '' ? 'd-block checkSelect' : 'd-none'}>{v.checkSelect}
                            </span>
                                <span className={!v.isActive ? 'mr-2 clickBlock' : 'active_select'}>
                                {v.name}</span>
                                <span className={v.isOpen ? 'active_icon clickBlock span_animation' : 'clickBlock span_animation'}>
                                <i className="clickBlock fas fa-caret-right"/></span>
                            </div>
                            <div className={v.isOpen ? 'clickBlock active_modal ml-1' : 'clickBlock d-none'}>
                                {v.data.length > 0 ? v.data.map(title => <span
                                        key={title.id}
                                        onClick={() => getSelect(v.id, title.title)}
                                    >
                                    {title.title}
                            </span>
                                    ) :
                                    <span>No data available</span>}
                            </div>
                        </div>)}
                    </div>
                    <div className='d-flex button_fil'>
                        <div className=' filter_button'/>
                        <button className='button_filter button_animation'>Фильтр</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VideoContentTop
