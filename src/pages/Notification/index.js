import React from 'react';
import Menu from '../../components/SideBar'
import Notification from '../../components/Notification'
import styled from 'styled-components';
import backgroundImg from '../../assets/loginBackground.jpg'



const Center = styled.div`
    margin-left:10%;
    margin-right:10%;
    border: 1px solid #000;
    background-image: url(${backgroundImg});
    width: 100%;
`;

const Div = styled.div`
  border: 1px solid #000;
  background-image: url(${backgroundImg});
  width: 100%;
  height: 100%;
`;


const Index = ()=>{

    return (
    <Div className='container'>
    <div className="row">

    <Menu className='col-3'/>
    <Center className='col-9'>
    <Notification />
    </Center>
    </div>
    </Div>

)}

export default Index;
