import React from "react";

const ScrollButton = (prop) => {
    const scrollToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <div className={`button_top ${prop.scroll > 600 ? 'scroll_button' : 'remove_button'}`}
             onClick={scrollToTop}>
            <i className="fa fa-chevron-up"/>
        </div>
    )
}
export default ScrollButton

