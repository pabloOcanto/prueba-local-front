import React,{useState} from 'react';
import styled from 'styled-components';



export const TextField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Index = ({inputHandler})=>{

    return (
        <div className="main">
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
              placeholder='name'
            />
          </div>
          
        </div>
      );

}

export default Index;