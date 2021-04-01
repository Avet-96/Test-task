import React, {useState} from 'react';

const VideoContentTop = () => {
    let blocks = [
        {
            id: 1, isOpen: false, styles: 'select_block_one', name: 'Раздел', data: [
                {id: 1999, title: 'Терапия'},
                {id: 20, title: 'Медицина катастроф'},
                {id: 3489, title: 'Хирургия'},
                {id: 4, title: 'Все'}]
        },
        {id: 2, isOpen: false, styles: 'select_block_to', name: 'Лектор', data: []},
        {
            id: 3, isOpen: false, styles: 'select_block_tre', name: 'Категория видеокурса', data: [
                {id: 7, title: 'Базовый'},
                {id: 5, title: 'Продвинутый'},
                {id: 18, title: 'Все'}
            ]
        },

    ]
    const [menu, setOpenMenu] = useState(blocks)
    const [ripples, setRipples] = useState([])
    const openSelect = (index) => setOpenMenu(blocks.map(list => {
        list.id === index ? list.isOpen = true : list.isOpen = false
        return list
    }))
    const animateRipple = (e) => {
        let el = e.target;
        let pos = el.getBoundingClientRect();
        let prepare = {
            x: e.clientX - pos.left,
            y: e.clientY - pos.top,
            show: true
        }
        setRipples(prev => [...prev, prepare]);
    }
    const rippleEnd = (i) => {
        ripples[i].show = false;
    }

    return (
        <div>
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
                    {menu.map((v) => <div className='clickBlock d-flex flex-column'
                                          key={v.id}
                                          onClick={() => openSelect(v.id)}
                    >
                        <div
                            className={'clickBlock select_block d-flex align-items-center justify-content-between ' + v.styles}>
                            <span
                                className={!v.isOpen ? 'mr-2 clickBlock' : 'clickBlock active_select '}>{v.name}</span>
                            <span
                                className={v.isOpen ? 'active_icon  clickBlock span_animation' : ' clickBlock span_animation '}>
                                <i className="clickBlock fas fa-caret-right"/></span>
                        </div>
                        {v.isOpen}
                        <div className={v.isOpen ? 'clickBlock active_modal ml-1' : 'clickBlock d-none'}>
                            {v.data.length > 0 ? v.data.map(title => <span key={title.id}>{title.title}</span>) :
                                <span>No data available</span>}
                        </div>
                    </div>)}
                </div>
                <div className='d-flex button_fil'>
                    <div className=' filter_button'/>
                    <button className='button_filter'>Фильтр</button>
                </div>
            </div>
        </div>
    )
}
export default VideoContentTop;
