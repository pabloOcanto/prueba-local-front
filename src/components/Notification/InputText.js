
import React,{useState} from 'react';
import {Input} from './customElements';
import renderError from './renderError';
import {ErrorMessage} from 'formik';


const InputText =({placeholder,text,id,props,value})=>(
    <>
    <label style={{color:'#9F9F9F'}} >{text} :</label>
    <Input 
    id ={id}
    type="text" 
    name={id}
    onChange={props.handleChange} 
    onBlur={props.handleBlur} 
    value={value} 
    placeholder={placeholder}
    
    /><br/>
  <ErrorMessage name={id} render={renderError}/>
  </>  
);

export default InputText;