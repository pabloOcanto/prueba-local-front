import React, { useState } from 'react'
//import { Redirect } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { Link, useLocation ,useHistory } from 'react-router-dom';
import alertaTitle from '../../assets/alertaTitle.png'
import { CgMenuGridR } from "react-icons/cg";
import { FaUserAlt } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import { confirm } from "react-confirm-box";
import './Navbar.css';


const isMobile = window.innerWidth <= 1023;
const data = {
    firstName: 'Nicole',
    lastName: 'Parker',
    img: ''
}


const Navbar = (props) => {
    let location = useLocation();
    const [sidebar, setSidebar] = useState(false);
    const [notificationMenu, setNotificationMenu] = useState(false);
    const [usersMenu, setUsersMenu] = useState(false);
    const [cookies,removeCookie] = useCookies(['access_token']);
    const showSidebar = () => setSidebar(!sidebar);
    const showNotificationMenu = () => setNotificationMenu(!notificationMenu);
    const showUsersMenu = () => setUsersMenu(!usersMenu);
    const history = useHistory();


    const handleLogout = async () => {
        let options={
            labels: {
                confirmable: "Si",
                cancellable: "No"
              }
        }
        const result = await confirm("Estás seguro de cerrar sesión?", options,);
        if (result) {
            document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });            
            window.location.reload();
    
        }
    };

    const customConfirm = {
        render: (message, onConfirm, onCancel) => {
          return (
            <>
              <h1>{message} </h1>
              <button onClick={onConfirm}> Si </button>
            </>
          );
        }
      };

    return (
        <>
            <div className='navbar'>
                <div className='row w-100'>
                    <div className='col'>
                        <Link to='#' className='menu-bars'>
                            {
                                !isMobile ? <FaIcons.FaBars /> :
                                    !sidebar ? <FaIcons.FaBars onClick={showSidebar} /> : <AiIcons.AiOutlineClose onClick={showSidebar} />}
                        </Link>
                        <img className='header-img-size' src={alertaTitle}></img>
                    </div>
                    <div className='col text-right ml-4 p-0'>
                        <MdIcons.MdOutlineNotificationAdd className='header-icon mt-2' />
                        <CgMenuGridR className='header-icon mt-2 ml-4' />
                        <Link to='/users/create' >
                            <span> <FaUserAlt className='header-icon-image hide-mobile ' /> </span>
                        </Link>
                        <span className='hide-mobile' > {cookies.user_id}</span>
                    </div>
                </div>
            </div>

            <nav className={!isMobile ? 'nav-menu active' : sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            {window.innerWidth > 1023 ? <FaIcons.FaBars /> : <AiIcons.AiOutlineClose />}
                        </Link>
                    </li>
                    <li className='nav-text sub-menu display-mobile'>
                        <Link to='#' className='menu-bars sub-menu' >
                            <FaUserAlt />
                            <span > {data.firstName + ' ' + data.lastName}</span>
                        </Link>
                    </li>
                    <li className={`nav-text ${location.pathname == '/home' ? 'active-menu' : ''}`}>
                        <Link to='/home' className='menu-bars'>
                            <AiIcons.AiFillHome />
                            <span>Inicio</span>
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

                            <li className={`nav-text ${notificationMenu ? 'sub-menu' : 'sub-menu-display'} ${location.pathname == '/notification/create' ? 'active-menu' : ''}`}>
                                <Link to='/notification/create' className=' sub-menu-p menu-bars'>
                                    <AiIcons.AiOutlineEdit />
                                    <span>Crear</span>
                                </Link>
                            </li>
                            <li className={`nav-text ${notificationMenu ? 'sub-menu' : 'sub-menu-display'} ${location.pathname == '/notification/list' ? 'active-menu' : ''}`}>
                                <Link to='/notification/list' className='sub-menu-p menu-bars'>
                                    <AiIcons.AiOutlineUnorderedList />
                                    <span>Listar</span>
                                </Link>
                            </li>
                        </>
                    }
                    <li className='nav-text sub-menu'>
                        <Link to='#' className='menu-bars sub-menu' onClick={showUsersMenu}>
                            <AiIcons.AiOutlineTeam />
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    {
                        usersMenu &&
                        <>
                            <li className={`nav-text ${usersMenu ? 'sub-menu' : 'sub-menu-display'} ${location.pathname == '/users/create' ? 'active-menu' : ''}`}>
                                <Link to='/users/create' className=' sub-menu-p menu-bars'>
                                    <AiIcons.AiOutlineUserAdd />
                                    <span>Crear</span>
                                </Link>
                            </li>
                            <li className={`nav-text ${usersMenu ? 'sub-menu' : 'sub-menu-display'} ${location.pathname == '/users/list' ? 'active-menu' : ''}`}>
                                <Link to='/users/list' className='sub-menu-p menu-bars'>
                                    <AiIcons.AiOutlineUnorderedList />
                                    <span>Listar</span>
                                </Link>
                            </li>
                        </>
                    }
                    <li className='nav-text sub-menu'>
                        <Link to='#' className='menu-bars sub-menu' onClick={handleLogout}>
                            <BiIcons.BiLogOutCircle />
                            <span>Salir</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default  Navbar