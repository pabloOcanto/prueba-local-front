
import React,{useState} from 'react';
import {Input} from './customElements';
import renderError from './renderError';
import {ErrorMessage} from 'formik';


const InputText =({id,props,value})=>(
    <>
    <label>{id} :</label>
    <Input 
    id ={id}
    type="text" 
    name={id}
    onChange={props.handleChange} 
    onBlur={props.handleBlur} 
    value={value} 
    /><br/>
  <ErrorMessage name={id} render={renderError}/>
  </>  
);

export default InputText;