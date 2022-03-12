import React from 'react';
import styled from 'styled-components';
import login from '../../assets/isur-login.png';

const Img = styled.img`
    height: 10rem;
    width: 70%%;

    border: none;
`;

const Div = styled.div`
    padding: 2em;
    width: 100%;
`;

const H3 = styled.h3`
    text-align: center;
    padding-right:2em ;
`;


const Header = ()=>(
    <Div>
        <H3>Isur Login</H3>
    </Div>
)


export default Header;