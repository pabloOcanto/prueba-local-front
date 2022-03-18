import React from 'react';
import styled from 'styled-components';
import footerImg from '../../assets/footerImg.png'

const Footer = () => {
 return(   <div className='main-footer'>
        <div className='container-fluid pr-0 pl-0 '>  <img alt='title' className='img-size-footer' src={footerImg}></img></div>
    </div>
 )
}


export default Footer;