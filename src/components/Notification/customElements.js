import styled from 'styled-components';


export const Input = styled.input`
  padding: 0.5em;
  border-radius: 3px;
  border: 1px dotted #000000;
  border-color: #3581fc;

  width: 100%;
  background: white;
  color: blue;
  padding-left: 5px;
  font-size: 10px;
  margin-left: 10px;
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
`;



export const Form_ = styled.form`

`;

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  margin-left: 1rem;
  width: 100%;
  background: blue;
  border: 2px hidden white;
`;

export const Div = styled.div`
    padding: 2em;
    border: 1px dotted #000000;
    border-color: #3581fc;
    
`;

export const Error = styled.p`
    background-color: red;
`;

export const Select = styled.select`
width: 100%;
background: white;
color: gray;
padding-left: 5px;
font-size: 20px;
border-radius: 3px;
border: 1px dotted #000000;
border-color: #3581fc;
margin-left: 10px;

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