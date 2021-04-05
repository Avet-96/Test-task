import React, {useState} from 'react'
import Icon from '../assets/immages/icons/Vector.svg'
import HeaderMenu from "./header-components/HeaderMenu";
import LeftMenu from "./left-menu/LeftMemu";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openLeftMenu = () => setIsOpen(!isOpen)
    const closedMenu = () => setIsOpen(false)

    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return <>
        <div className="header_block p-3">
            <div className='container'>
                <div className='d-flex justify-content-end align-items-center'>
                    <div className='d-flex justify-content-between sign_in'>
                        <a href="#" className='d-flex justify-content-between align-items-center'>Вход
                            <span className='ml-2'><img src={Icon}
                                                        width='100%'
                                                        height='100%'
                                                        alt=""/></span></a>
                        <a href="#" className='header_links'>Нет аккаунта ? </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='header_menu_block'>
            <HeaderMenu open={openLeftMenu}/>
        </div>
        <div className={isOpen ? 'blur' : 'd-none'} onClick={closedMenu}/>
        <LeftMenu open={isOpen} close={closedMenu}/>
    </>
}


export default Header