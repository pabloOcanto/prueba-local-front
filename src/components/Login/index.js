import React from 'react';
import styled from 'styled-components';
import Form from './Form'
import Header from './Header'
import backgroundImg from '../../assets/loginBackground.jpg'


const BackgroundDiv = styled.div`
  border: 1px solid #000;
  background-image: url(${backgroundImg});
  width: 100%;
`;

const Div = styled.div`
    margin-left:10%;
    margin-right:10%;
`;
const Center = styled.div`
    max-width:70%
`;

const index = ()=>(

    <BackgroundDiv className='container-fluid'>
        <Div className='row'>
            <Div className='col-md-12 col-sm-4 col-xs-2'>
            <Center>    
            <Header/>    
            <Form/>
            </Center>
            </Div>
        </Div>
    </BackgroundDiv>
);

    


export default index;
