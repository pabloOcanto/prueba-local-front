import React from 'react';
import Footer from '../../components/Footer'
import Home from '../../components/Home'
import styled from 'styled-components';


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