import React from 'react';
import styled from 'styled-components';
import Form from './Form'
import Header from './Header'
import backgroundImg from '../../assets/loginBackground.jpg'


const BackgroundDiv = styled.div`
  border: 1px solid #000;
  background-image: url(${backgroundImg});
  width: 100%;
  min-height:100vh;
`;

const Div = styled.div`
    min-height:80vh;
    padding:4em;
    @media (max-width: 768px) {
        padding:0;
        padding-top:4em;
      }
`;
// const Center = styled.div`
   
// `;

const index = ()=>(

    <BackgroundDiv className='container-fluid '>
        <Div className='row justify-content-center'>
            <Div className='col-md-12 '>
            {/* <Center className='justify-content-center col-8'>     */}
            {/* <Header/>     */}
            <Form/>
            {/* </Center> */}
            </Div>
        </Div>
    </BackgroundDiv>
);

    


export default index;
