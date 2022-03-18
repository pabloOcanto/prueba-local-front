import React from 'react';
import styled from 'styled-components';
import footerImg from '../../assets/footerImg.png'
import alertaTitle from '../../assets/alertaTitle.png'
import { MdOutlineNotificationAdd } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserAlt } from 'react-icons/fa';


const data = {
    firstName: 'Nicole',
    lastName: 'Parker',
    img: ''
}
const index = () => {
    return (<div className='main-header'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-7 pt-3 pb-3'>
                    <img className='header-img-size' src={alertaTitle}></img>
                </div>
                <div className='col-2 pt-3 d-none d-lg-block '>
                    <div className='row d-flex justify-content-end mr-4'>
                        <MdOutlineNotificationAdd className='header-icon mt-2 mr-4' />
                        <CgMenuGridR className='header-icon mt-2' />
                    </div>
                </div>
                <div className='col-2 pt-3 d-none d-lg-block'>
                    <div className='row mt-2  border-card'>
                        <div className='col-3 px-1'>
                            <FaUserAlt className='header-icon-image ' />
                        </div>
                        <div className='col-4 pl-0 '>
                            <p className='m-0'>{data.firstName}</p>
                            <p className='m-0'>{data.lastName}</p>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}


export default index;