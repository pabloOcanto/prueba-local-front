import React, { useState, useContext, useEffect } from 'react';
import { Button, Div, Error, Form_, Input, Label } from './customElements';
import Select from 'react-select';
//import LoadService from '../../service/LoadService';
import UserService from '../../service/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

/*let dummySave ={
    "topic":"peligro",
    "title":"Fuertes Precitaciones",
    "locationdescription": "Plottier, Neuquen. 13/12/21 - 18:45",
    "message":"La Ruta ede-sur advierte que por las proximas 48Hs no se podra brindar el servcio.Ante cualquier emergencia contactarse al 2284 450-2214",
    "icon":"precipitaciones.png",
    "area":[
        {
        "lat":"-40.156",
        "lon":"-64.348",
        "state":"Chubut",
        "city":"Rawson"
        },
        {
        "lat":"-40.156",
        "lon":"-63.348",
        "state":"Neuquen",
        "city":"San Martin"
        }
    ],
    "userCreatedId":1
}*/

const UserForm = (props, { isLogged, loguedUser }) => {
    let modelToSave = {
        dni: '',
        email: '',
        password: '',
        password2: '',
        mobilePhone: '',
        fullName: '',
        rol: '',
        status: 'ACTIVE'
    }

    const userTypes = [
        {
            label: 'Usuario',
            value: 'USER'
        },
        {
            label: 'ADMIN',
            value: 'ADMIN'
        }
    ]

    const [newUser, setNewUser] = useState(modelToSave)
    const [cookies] = useCookies(['access_token']);

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setNewUser(newUser => ({
            ...newUser,
            [name]: value
        }));
    };

    const handleChangeSelect = async (value, name) => {
        setNewUser(newUser => ({
            ...newUser,
            [name]: value.value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (validateSubmit()) {
            const returnCode = await UserService.create(newUser, cookies.access_token).then(res => {
                if (res.ok) {
                    toast.success("Guardado con éxito", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    handleReset();
                }
                else {
                    toast.error('Se produjo un error al guardar la notificación', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
        }
    }

    const handleReset = async () => {
        setNewUser(modelToSave)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validateNumerics = (dni, length) => {
        switch (length) {
            case 8:
                return String(dni)
                    .toLowerCase()
                    .match(/^\d{8}$/
                    );
                break;
            case 10:
                return String(dni)
                    .toLowerCase()
                    .match(/^\d{10}$/
                    );
                break;
            default:
                break;
        }


    };

    const validateSubmit = () => {
        const errors = [];

        if (!validateNumerics(newUser.dni, 8)) {
            errors.push('Capture un DNI válido de 8 caracteres numéricos')
        }

        if (!validateEmail(newUser.email)) {
            errors.push('Capture un email válido')
        }

        if (newUser.fullName.length < 3) {
            errors.push('Capture un nombre válido')
        }

        if (!validateNumerics(newUser.mobilePhone, 10)) {
            errors.push('Capture número telefónico válido(10 dígitos)')
        }
        // TODO regexp password
        if (newUser.password.length < 6) {
            errors.push('Capture una contraseña válida')
        }

        if (newUser.password !== newUser.password2) {
            errors.push('Las contraseñas no coinciden')
        }

        errors.forEach(element => {
            toast.warn(element, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
        if (errors.length === 0) {
            return true
        }
    }

    return (
        <>    <ToastContainer />
            <Div className='container col-12 col-md-6'>
                <h2 className='text-center tiitle-form'> Formulario de usuarios </h2>
                <Form_ onSubmit={handleSubmit}>
                    <div className='row form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label >
                                DNI
                                <Input
                                    value={newUser.dni}
                                    type="email"
                                    onChange={e => { handleChange(e) }}
                                    name="dni"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label>
                                email
                                <Input
                                    value={newUser.email}
                                    type="email"
                                    onChange={e => { handleChange(e) }}
                                    name="email"
                                    className='sc-bYoBSM hCrKND'
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label >
                                Nombre Completo
                                <Input
                                    value={newUser.fullName}
                                    type="text"
                                    onChange={e => { handleChange(e) }}
                                    name="fullName"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label >
                                Número telefónico
                                <Input
                                    value={newUser.mobilePhone}
                                    type="text"
                                    onChange={e => { handleChange(e) }}
                                    name="mobilePhone"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label>
                                Topic
                                <Select
                                    value={{ label: newUser.rol }}
                                    options={userTypes}
                                    onChange={e => { handleChangeSelect(e, "rol") }}
                                    name="rol"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label >
                                Contraseña
                                <Input
                                    value={newUser.password}
                                    type="password"
                                    onChange={e => { handleChange(e) }}
                                    name="password"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label >
                                Confirmar Contraseña
                                <Input
                                    value={newUser.password2}
                                    type="password"
                                    onChange={e => { handleChange(e) }}
                                    name="password2"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Button color='green' type="submit" onClick={handleSubmit}>Enviar</Button>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Button color='gray' type="button" onClick={handleReset}>Resetear</Button>
                        </div>
                    </div>
                </Form_>
            </Div>
        </>
    )
};

export default UserForm;;


