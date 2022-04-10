import React, { useState, useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Context from '../../context/Context'
import { useHistory } from "react-router-dom";
import UserService from '../../service/UserService'
import initValues from './initialvalues';
import schema from './schema';
import renderError from './renderError';
import lock from '../../assets/lock.png';
import user from '../../assets/user.png';
import loginImg from '../../assets/loginImg.png'
import { Input, Div, Error, Form_ } from './customElements';
import { useCookies } from 'react-cookie';
import './login.css';


const Form = ({ isLogged }) => {
    const history = useHistory();
    const context = useContext(Context);
  //  const [context, setContext] = useContext(Context);
    const [error, setError] = useState(null);
    /*const [cookiesAccessToken, setCookieAccessToken] = useCookies(['access_token']);
    const [cookiesUserID, setCookieUserID] = useCookies(['user_id']);
    const [cookiesUserRol, setCookieUserRol] = useCookies(['user_rol']);*/
    const [cookies, setCookie] = useCookies(['access_token','user_id','user_rol']);
    
    const inOneHour = new Date(new Date().getTime() + ((60 * 60) * 1000));//one hour
    return (

        <Formik
            initialValues={initValues}
            validationSchema={schema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const token = await UserService.auth(values).then(function(res){
                        setCookie('access_token', res.token,{ path: '/',  inOneHour})
                        setCookie('user_id', res.user,{ path: '/',  inOneHour})
                        setCookie('user_rol', res.rol,{ path: '/',  inOneHour})
    
                        history.push("/home");  
                    }
                      
                    );
                    context.login({token}); 
                   
                  
                    //resetForm();
                } catch (error) {
                    console.log("No se pudo authenticar",error)
                }
            }}>

            {props => (
                <Div style={styles.bkgContainer} className='container'>
                    {error && <Error> {error} </Error>}
                    <div className='row'>


                        <div className='col-md-6 col-12 align-self-center'>
                            <img alt='logo' style={styles.img} src={loginImg}></img>
                        </div>
                        <div className='col-md-6 col-12'>
                            <Form_ className='borde-line' onSubmit={props.handleSubmit}>
                                <h2 className='text-center login-title'>Inicio de Sesión</h2>
                                <Div className='form-group'>
                                    {/* <Img src={user} /> */}
                                    <Input
                                        className='placeHolder-color'
                                        placeholder="usuario"
                                        inputColor='#bfc5d1'
                                        imgIcon={user}
                                        id="dni"
                                        type="text"
                                        name="dni"
                                        image={user}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.dni}
                                        autoComplete='off'
                                    /><br />
                                    <ErrorMessage className='text-center' name='dni' render={renderError} />
                                    {/* <Img src={lock} /> */}
                                    <Input
                                        className='placeHolder-color'
                                        placeholder='contraseña'
                                        inputColor='#bfc5d1'
                                        imgIcon={lock}
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                        image={lock}
                                    /><br />
                                    <ErrorMessage name='password' render={renderError} />
                                </Div>
                                <div className='form-group text-center'>
                                    <button className='btn-login' type="submit">INGRESAR</button><br />
                                    <button className='btn-pass btn btn-link' type="button">Recuperar contraseña</button><br />
                                </div>
                            </Form_>
                        </div>
                    </div>

                </Div>
            )}
        </Formik>

    )
};
var styles = {
    img: {
        width: '100%'
    },
    bkgContainer: {
        backgroundColor: 'white',
        padding: '2em'

    },
}

export default Form;