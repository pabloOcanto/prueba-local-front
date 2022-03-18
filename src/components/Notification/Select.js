
import React,{useState} from 'react';
import {Select} from './customElements';
import renderError from './renderError';
import {ErrorMessage} from 'formik';


const Select_ =({text,props,id,value,elements})=>(
    <>
    <label style={{color:'#9F9F9F'}}>{text} :</label>
    <Select 
    id ={id}
    name={id}
    onChange={props.handleChange} 
    onBlur={props.handleBlur} 
    value={value} 
    >
        {elements.length>1 && elements.map(element => (
          <option key={element.id} value={element.id}>{element.name}</option>   
        ))}

    </Select>
  <ErrorMessage name={id} render={renderError}/>
  <br/>
  </>  
);

export default Select_;