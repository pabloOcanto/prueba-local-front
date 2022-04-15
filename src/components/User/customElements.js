import styled from 'styled-components';
import backgroundImg from '../../assets/loginBackground.jpg'

export const Input = styled.input.attrs({
  placeHolderColor: "red"
})`
  padding: .5em;
  border-radius: 3px;
  border: 1px solid #9F9F9F;
  border-color: #9F9F9F;
  color:#9F9F9F;
  width: 100%;
  background: white;
  font-size: 16px;

  ::placeholder{
    font-style:italic
  }
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
`;


export const Label = styled.label`
    width: 100%;
    height: 30px;
`;


export const Form_ = styled.form`

`;

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  width: 100%;
  background: ${props => props.color ? props.color : 'blue'} ;
  border: 2px hidden white;
  padding:1em;
  color: white
`;

export const Div = styled.div`
border-color: #9F9F9F;
border-radius: 5px;
padding: 2em;
margin-top:2em;
@media (max-width: 768px) {
 padding:0;
}
`;

export const Error = styled.p`
    background-color: red;
`;

export const Select = styled.select`
padding:.26em;
width: 100%;
background: white;
color: gray;
padding-left: 5px;
font-size: 20px;
border-radius: 3px;
border: 1px solid #000000;
border-color: #9F9F9F;

     option {
       color: black;
       background: white;
       font-weight: small;
       display: flex;
       white-space: pre;
       min-height: 20px;
       padding: 0px 2px 1px;
     }
`;