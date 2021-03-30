import React from 'react';
import photto from '../../assets/immages/photto.png'

const ContentBlogs = (props) => {
    return <div
        className={'mt-3 mr-3 content_blog d-flex flex-column pl-0 ' + 'col-12 col-sm-8 pr-0  col-md-' + props.col}>
        <div className='images_block'><img src={photto} width='100%' height='100%' alt=""/></div>
        <div className='pl-4 pr-4  pt-3 pb-3'>
            <div className='text-center'>
                <h2>Имплантация в деталях</h2>
                <p>Тонкости за которыми кроются стабильный результат или осложнения</p>
            </div>
            <div className="blog_icons d-flex ">
                <div className='d-flex align-items-center mr-3 '><i className="fas fa-play-circle"/><p
                    className='m-0 ml-2'>3ч 45м
                    50с</p>
                </div>
                <div className='d-flex align-items-center mr-3 '><i className="fas fa-bars"/><p
                    className='m-0 ml-2'>5</p>
                </div>
                <div className='d-flex align-items-center  '><i className="fas fa-eye"/> <p className='m-0 ml-2'>30</p>
                </div>

            </div>
            <div className="blog_buttons mt-4 d-flex justify-content-between">
                <button>Подробнее</button>
                <button>Трейлер</button>
                <button> Добавить</button>
            </div>
        </div>
    </div>
}

export default ContentBlogs