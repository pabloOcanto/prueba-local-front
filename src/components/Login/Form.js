import React,{useState,useContext} from 'react';
import {Formik,ErrorMessage} from 'formik';
import Context from '../../context/Context'
import { useHistory } from "react-router-dom";
import UserService from '../../service/UserService'
import initValues from './initialvalues';
import schema from './schema';
import renderError from './renderError';
import lock from '../../assets/lock.png';
import user from '../../assets/user.png';
import {Input,Button,Div,Error,Form_,Img} from './customElements'; 


const Form = ({isLogged})=>{
    const history = useHistory();
    const context = useContext(Context);
    const [error,setError] = useState(null);  
    return (
      
        <Formik
        initialValues={initValues}
        validationSchema={schema}
        onSubmit={async (values, {resetForm}) => {
           try {
               console.log('se inicio sesion')
               const token =  await UserService.auth(values);
               context.login(token);
               history.push("/home");
               //resetForm();
           } catch (error) {
               setError("No se pudo authenticar")
           }
        }}>     

        {props => ( 
        <Div>
        {error &&  <Error> {error} </Error>}
        <Form_ onSubmit={props.handleSubmit}>
            <Div className='form-group'>
            <Img src={user} />   
            <Input 
                id ="user"
                type="text" 
                name="user"
                image={user}
                onChange={props.handleChange} 
                onBlur={props.handleBlur} 
                value={props.values.user} 
                /><br/>
              <ErrorMessage name='user' render={renderError}/>  
            <Img src={lock} />   
            <Input 
                id="password"
                type="password" 
                name="password"
                onChange={props.handleChange} 
                onBlur={props.handleBlur} 
                value={props.values.password}  
                image={lock}  
                /><br/>
                 <ErrorMessage name='password' render={renderError}/>
            </Div>
            <Div className='form-group'>
                <Button type="submit">ingresar</Button><br/>
                <Button type="button">recuperar pass</Button><br/>
            </Div>
        </Form_>
        </Div>
    )}  
      </Formik>
   
)};

export default Form; 