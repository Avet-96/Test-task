import React from 'react';
import VideoContentTop from "./main-components/VideoCourseContent";
import svg from '../assets/immages/backVideoCourse.svg'
import ContentBlogs from "./main-components/ContentBlogs";
import ContentBottom from "./main-components/ContentBottom";

const Main = () => {
    return (
        <>
            <div className='content_bg  position-relative p-3'>
                <div>
                    <VideoContentTop/>
                    <div className='position-absolute content_bg_img p-4'>
                        <img width='100%' height='100%' src={svg} alt=""/>
                    </div>

                </div>
                <div
                    className='container videos_block row d-flex m-0 flex-wrap align-items-center justify-content-center'>
                    <ContentBlogs col={5}/>
                    <ContentBlogs col={5}/>
                    <ContentBlogs col={5}/>
                    <ContentBlogs col={5}/>

                </div>
                <div className='d-flex justify-content-center mt-5 mb-3'>
                    <button className='btn lod_more'>загрузить больше</button>
                </div>
            </div>
            <div className='w-100'>
                <div className='content_bottom'>
                    <ContentBottom/>
                </div>
            </div>
        </>
    )
}

export default Main
