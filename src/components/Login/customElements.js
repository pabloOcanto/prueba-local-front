import styled from 'styled-components';


export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 80%;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
`;



export const Form_ = styled.form`
    vertical-align: middle;
    margin: 0;
    text-align: left;

`;

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  margin-left: 1rem;
  width: 85%;
  color: blue;
  border: 2px solid white;
  background-color: #02a1c1;

`;

export const Div = styled.div`
    padding: 2em;
`;

export const Error = styled.p`
    background-color: red;
`;

