import styled from 'styled-components';

export const Input = styled.input.attrs({
  placeholderTextColor: "red"
})`
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: 1px solid #bfc5d1;
  border-top:0;
  border-left:0;
  border-top-left-radius:30px;
  border-bottom-left-radius:30px;
  background: url(${props => props.imgIcon}) 2px 2px;
  background-size:35px;
  background-repeat:no-repeat;
  box-shadow: 5px 2px 5px #bfc5d1;
  padding-left:40px;
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
    padding:2em;
`;

export const Error = styled.p`
    background-color: red;
`;
