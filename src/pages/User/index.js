import React from 'react';
import Menu from '../../components/SideBar'
import Footer from '../../components/Footer'
import User from '../../components/User'
import styled from 'styled-components';
import backgroundImg from '../../assets/loginBackground.jpg'
import Header from '../../components/Header'


const Center = styled.div`
    margin-left:15%;
    margin-right:10%;
    width: 100%;
    @media (max-width: 768px) {
      margin-left:0;
      margin.right:0;
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


const Index = ()=>{
    return (
    <Div className='container-fluid p-0'>
      {/* <Menu className='col-3'/>
      <Header /> */}
        <ContentWrap> 
          <Center className='col-12 col-md-9'>
              <User />
            </Center>
         
        </ContentWrap>
      <Footer/>
    </Div>

)}

export default Index;
