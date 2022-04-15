import React,{useState} from 'react';
import styled from 'styled-components';

export const TextField = styled.input`
margin: 1em 0;
padding: .5em;
border-radius: 3px;
border: 1px solid #9F9F9F;
border-color: #9F9F9F;
color:#9F9F9F;
width: 100%;
background: white;
font-size: 16px;
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