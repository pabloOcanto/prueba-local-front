import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Context from '../../context/Context'
import { Formik, Form } from 'formik';
import initValues from './initialvalues';
import schema from './schema';
import { Button, Div, Error, Form_ } from './customElements';
import InputText from './InputText';
import Select from './Select';
import ButtonBostrapt from './ButtonBostrapt'
import LoadService from '../../service/LoadService';
import NotifcationService from '../../service/UserService';
//import UserGenerator from '../../utils/UserGenerator';
import Regions from './Regions';

let userTypes = [
    {
        "id": '0',
        "name": 'Seleccione'
    },
    {
        "id": '1',
        "name": 'Usuario'
    },
    {
        "id": '2',
        "name": 'Administrador'
    }
]

const UserForm = ({ isLogged }) => {
    const [state, setState] = useState({ hasError: false, message: '' });
    const [initialValues, setInitialValues] = useState(initValues)

    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    const handleReset = (values, { setSubmitting, setErrors }) => {
        setInitialValues(initValues)
    }

    /*
    const handleSubmit = async(values, { setSubmitting, setErrors }) => {
        setSubmitting(true)
        const { value: { status, message } } = await console.log(values)
        if (status) {
          this.fetchCompanies()
          this.closeModal()
        } else {
          setErrors({ email: message })
        }
      }
    */
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, formikProps) => this.handleSubmit(values, formikProps)}
            >

                {props => (
                    <Div >
                        <h2 className='text-center tiitle-form'> Formulario de usuarios </h2>
                        {state.hasError && <Error> {state.message} </Error>}
                        <Form onSubmit={() => { handleSubmit(props.values) }} autoComplete="none">
                            <div className='container '>
                                <div className='row  form-group justify-content-center'>
                                    <div className='col-12 col-md-6'>
                                        <InputText type="text" text='Nombre de usuario (DNI)' placeholder='Capture el DNI del usuario' id="userDNI"
                                            props={props} value={props.values.userDNI} maxlength="8"
                                        />
                                    </div>
                                </div>
                                <div className='row  form-group justify-content-center'>
                                    <div className='col-12 col-md-6'>
                                        <InputText text='Correo electrónico' placeholder='Email' id="email" props={props} value={props.values.email} />
                                    </div>
                                </div>
                                <div className='row  form-group justify-content-center'>
                                    <div className='col-12 col-md-6'>
                                        <InputText text='Teléfono' placeholder='Número Telefónico' id="phone" maxlength={15} props={props} value={props.values.phone} />
                                    </div>
                                </div>
                                <div className='row  form-group justify-content-center'>
                                    <div className='col-12 col-md-6'>
                                        <InputText type="password" autocomplete="none" text='Contraseña' placeholder='Contraseña' id="password1" maxlength={15} props={props} value={props.values.password1} />
                                    </div>
                                </div>
                                <div className='row  form-group justify-content-center'>
                                    <div className='col-12 col-md-6'>
                                        <InputText type="password" autocomplete="none" text='Confirmar Contraseña' placeholder='Contraseña' id="password2" maxlength={15} props={props} value={props.values.password2} />
                                    </div>
                                </div>
                                <div className='row  form-group justify-content-center'>
                                    <div className='col-12 col-md-6'>
                                        <Select text='Tipo de usuario' placeholder='Seleccione' id="userType" props={props} value={props.values.userType} elements={userTypes} />
                                    </div>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-12 col-md-6 ' id='enviar'>
                                        {/* <Button color='green' type="submit" disabled={isSubmitting || !isValid || !dirty}>Enviar</Button> */}
                                        <Button color='green' type="submit" >Enviar</Button>
                                    </div>
                                </div>
                                <div className='row justify-content-center py-4'>
                                    <div className='col-12 col-md-6' id='reset'>
                                        <Button color='gray' type="button" onClick={() => {
                                            handleReset(props.values)
                                        }}>Resetear</Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Div>
                )}
            </Formik>
        </>
    )
};

export default UserForm;