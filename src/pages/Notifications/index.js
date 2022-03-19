import React from 'react';
import Menu from '../../components/SideBar'
import Notifications from '../../components/Notifications'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styled from 'styled-components';
import backgroundImg from '../../assets/loginBackground.jpg'

const Center = styled.div`
    margin-left:20%;
    margin-right:10%;
    width: auto;
    @media (max-width: 768px) {
        margin-left:7%;
      }
`;

const Div = styled.div`
display:flex;
flex-direction:column;
min-heigth:100vh;

`;
const ContentWrap = styled.div`
flex:1;
min-height:90vh;
background-color:#FAFAFA

`;

const Index = () => {

    return (
        <Div className='container-fluid pl-0 pr-0'>
            <ContentWrap>
                <Center className='col-12'>
                    <h1 className='text-center notificacion-title'>Notificaciones</h1>
                    <Notifications />
                </Center>
            </ContentWrap>
            <Footer />

        </Div>

    )
}


export default Index;