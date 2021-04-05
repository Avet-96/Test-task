import React from "react";

const ScrollButton = () => {

    const scrollToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <div className='scroll_button position-fixed' onClick={scrollToTop}>
            <i className="fa fa-chevron-up"/>
        </div>
    )
}

export default ScrollButton