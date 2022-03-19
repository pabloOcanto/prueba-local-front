import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import {Link} from 'react-router-dom';
import './Navbar.css';

import alertaTitle from '../../assets/alertaTitle.png'
import { MdOutlineNotificationAdd } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserAlt } from 'react-icons/fa';


const data = {
    firstName: 'Nicole',
    lastName: 'Parker',
    img: ''
}

const Navbar = () => {
const[sidebar, setSidebar] = useState(false);
const[notificationMenu, setNotificationMenu] = useState(false);
const showSidebar = () => setSidebar(!sidebar);
const showNotificationMenu  = ()=> setNotificationMenu(!notificationMenu);
    return (
   <>
            <div className='navbar'>
            <div className='row w-100'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              
                   <div className='col-2'> <img className='header-img-size' src={alertaTitle}></img></div>
                    <div className='col-9 text-right ml-4 f-flex d-none d-lg-block'>
                    <MdIcons.MdOutlineNotificationAdd className='header-icon mt-2' />
                    <CgMenuGridR className='header-icon mt-2 ml-4' />
                    <span> <FaUserAlt className='header-icon-image ' /> </span>
               
                         
                     <span className='word-break' > {data.firstName +' '+ data.lastName}</span>
                   
                    </div> 
                </div>
            </div>

            <nav className={window.innerWidth > 1023 ? 'nav-menu active' : sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            {window.innerWidth > 1023 ? <FaIcons.FaBars /> : <AiIcons.AiOutlineClose />}
                        </Link>

                    </li>
                    <li className='nav-text'>
                        <Link to='/home' className='menu-bars'>
                            <AiIcons.AiFillHome />
                            <span>Home</span>
                        </Link>

                    </li>
                    <li className='nav-text sub-menu'>
                        <Link to='#' className='menu-bars sub-menu' onClick={showNotificationMenu}>
                            <IoIcons.IoMdNotifications />
                            <span>Notificaciones</span>
                        </Link>
                    </li>
                   {
                       notificationMenu &&
                   <>
                        <li className={notificationMenu ? 'nav-text sub-menu' : 'nav-text sub-menu-display'}>
                            <Link to='/notification/create' className=' sub-menu-p menu-bars'>
                                <AiIcons.AiOutlineEdit />
                                <span>Crear</span>
                            </Link>
                        </li>
                        <li className={notificationMenu ? 'nav-text sub-menu' : 'av-text sub-menu-display'}>
                            <Link to='/notification/list' className='sub-menu-p menu-bars'>
                                <AiIcons.AiOutlineUnorderedList />
                                <span>Listar</span>
                            </Link>
                        </li>
                        </>
                    }
                        <li className='nav-text sub-menu'>
                        <Link to='#' className='menu-bars sub-menu' onClick={showNotificationMenu}>
                            <BiIcons.BiLogOutCircle />
                            <span>Salir</span>
                        </Link>
                    </li>
                 
                    
                </ul>

            </nav>
   </>
  )
}

export default Navbar