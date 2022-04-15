import React, { useState, useEffect } from 'react';
import { Button, Div, Form_, Input, Label } from './customElements';
import Select from 'react-select';
import LoadService from '../../service/LoadService';
import NotifcationService from '../../service/NotificationService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

const NotificationForm = (props, { isLogged, loguedUser }) => {
    let modelToSave = {
        topicObject: '',
        topic: '',
        title: '',
        area: [],
        message: '',
        locationdescription:'Plottier, Neuquen. 13/12/21 - 18:45',
        icon:"precipitaciones.png",
        userCreatedId:1
    }

    const [newNotification, setNewNotification] = useState(modelToSave)
    const [cities, setCities] = useState([]);
    const [topics, setTopics] = useState([]);
    const [isLoadingCity, setLoadingCity] = useState(true);
    const [isLoadingTopic, setLoadingTopic] = useState(true);
    const [cookies] = useCookies(['access_token']);

    useEffect(async () => {
        if (isLoadingCity) {
            const cities = await LoadService.getCities(cookies.access_token);
            setCities(cities);
            setLoadingCity(false);
        }
    },
        [isLoadingCity]);

    useEffect(async () => {
        if (isLoadingTopic) {
            const topics = await LoadService.getTopics(cookies.access_token);
            setTopics(topics);
            setLoadingTopic(false);
        }
    },
        [isLoadingTopic]);


    const handleChange = async (e) => {
        const { name, value } = e.target;
        setNewNotification(newNotification => ({
            ...newNotification,
            [name]: value
        }));
    };

    const handleChangeSelect = async (value, name) => {
        setNewNotification(newNotification => ({
            ...newNotification,
            [name]: value,
            topic: value.name,
            icon : value.name+'.png'
        }));
    };

    const handleChangeSelectArea = async (value, name) => {
        setNewNotification(newNotification => ({
            ...newNotification,
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (validateSubmit()) {
                const returnCode = await NotifcationService.send(newNotification, cookies.access_token).then(res => {
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
        setNewNotification(modelToSave)
    }

    const validateSubmit = () => {
        const errors = [];

        if (newNotification.title.length === 0) {
            errors.push('Capture el título')
        }

        if (newNotification.message.length === 0) {
            errors.push('Capture la descripción')
        }
        if (newNotification.topic.length === 0) {
            errors.push('Seleccione uno o más topic')
        }
        if (newNotification.area.length === 0) {
            errors.push('Seleccione una o más areas')
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

                <h2 className='text-center tiitle-form'> Formulario de notificaciones </h2>
                {isLoadingCity || isLoadingTopic &&
                    <h2>Loading..</h2>
                }
                <Form_ onSubmit={handleSubmit}>
                    <div className='row form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label >
                                Título
                                <Input
                                    value={newNotification.title}
                                    type="text"
                                    onChange={e => { handleChange(e) }}
                                    name="title"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label>
                                Mensaje
                                <Input
                                    value={newNotification.message}
                                    type="text"
                                    onChange={e => { handleChange(e) }}
                                    name="message"
                                    className='sc-bYoBSM hCrKND'
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label>
                                Topic
                                <Select {...props}
                                    value={newNotification.topicObject}
                                    options={topics}
                                    onChange={e => { handleChangeSelect(e, "topicObject") }}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                />
                            </Label>
                        </div>
                    </div>
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Label>
                                Area
                            </Label>
                            <Select {...props}
                                value={newNotification.area}
                                isMulti
                                options={cities}
                                onChange={e => { handleChangeSelectArea(e, "area") }}
                                getOptionLabel={(option) => option.city +","+ option.state}
                                getOptionValue={(option) => option.id}
                            />
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

export default NotificationForm;

