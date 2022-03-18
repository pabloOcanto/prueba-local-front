import React from 'react';
import Menu from '../../components/SideBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Home from '../../components/Home'
import styled from 'styled-components';
import backgroundImg from '../../assets/loginBackground.jpg'
import footerImg from '../../assets/footerImg.png'

// const Center = styled.div`
//     margin-left:10%;
//     margin-right:10%;
//     border: 1px solid #000;
//     background-image: url(${backgroundImg});
//     width: 100%;
//     height: 100%;
// `;

const Center = styled.div`
    margin-left:20%;
    margin-right:10%;
    width: 100%;
    @media (max-width: 1023px) {
        margin-left:23%;
      }
      @media (max-width: 768px) {
        margin-left:15%;
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
        <>
            <Div className='container-fluid pr-0 pl-0'>
                <Menu className='col-3' />
                <Header />
                <ContentWrap>
                    <Center className='col-9'>
                        <Home />
                    </Center>

                </ContentWrap>
                <Footer />
            </Div>
        </>

    )
}


export default Index;