
import React,{useState} from 'react';
import {Input} from './customElements';
import renderError from './renderError';
import {ErrorMessage} from 'formik';


const InputText =({placeholder,text,id,props,value,type,maxlength,max,handleChange,autocomplete,min})=>(
    <>
    <label style={{color:'#9F9F9F'}} >{text} :</label>
    <Input 
    id ={id}
    type={type} 
    name={id}
    onChange={props.handleChange} 
    onBlur={props.handleBlur} 
    value={value} 
    placeholder={placeholder}
    maxLength={maxlength}
    max={max}
    min={min}
    autoComplete={autocomplete}
    
    /><br/>
  <ErrorMessage name={id} render={renderError}/>
  </>  
);

export default InputText;