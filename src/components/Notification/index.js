import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Context from '../../context/Context';
import { Button, Div, Error, Form_, Input, Label } from './customElements';
import Select from 'react-select';
import LoadService from '../../service/LoadService';
import NotifcationService from '../../service/NotificationService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorMessage } from 'formik';

const NotificationForm = (props, { isLogged, loguedUser }) => {
    const [cities, setCities] = useState([]);
    const [topics, setTopics] = useState([]);
    const [isLoadingCity, setLoadingCity] = useState(true);
    const [isLoadingTopic, setLoadingTopic] = useState(true);
    const [hasErrors, setHasError] = useState(false);

    let modelToSave = {
        topic: [],
        title: '',
        area: [],
        description: '',
        date_created: '',
        user_created_id: '',
        status: '1'
    }

    const [newNotification, setNewNotification] = useState(modelToSave)

    useEffect(async () => {
        if (isLoadingCity) {
            const cities = await LoadService.getCities();
            console.log({ cities });
            setCities(cities);
            setLoadingCity(false);
        }
    },
        [isLoadingCity]);

    useEffect(async () => {
        if (isLoadingTopic) {
            const topics = await LoadService.getTopics();
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
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (validateSubmit()) {
           /* await setNewNotification(newNotification => ({
                ...newNotification,
                "date_created": Date.now(),
                "user": "loguedUser"
            }))
            */

            newNotification.topic.forEach(topicLoop => {
                newNotification.area.forEach(areaLoop => {
                    let notification = {
                        topic: topicLoop.id,
                        title: newNotification.title,
                        area: areaLoop.id,
                        description: newNotification.description,
                        date_created:  Date.now(),
                        user_created_id:  "loguedUser",
                        status: 1
                    }
                    try {                    
                       const returnCode =  NotifcationService.send(notification);                       
                      /*  if(returnCode===200){
                            toast.success("Guardado con éxito", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                        else{
                            console.log('sssssss',returnCode)
                            toast.error(returnCode, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });*/
                        }
                    catch (error) {
                        toast.error(error, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }

                })
            })

           // handleReset();
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

        if (newNotification.description.length === 0) {
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
        if(errors.length===0){
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
                                    value={newNotification.description}
                                    type="text"
                                    onChange={e => { handleChange(e) }}
                                    name="description"
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
                                    value={newNotification.topic}
                                    isMulti
                                    options={topics}
                                    onChange={e => { handleChangeSelect(e, "topic") }}
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
                                    onChange={e => { handleChangeSelect(e, "area") }}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                />                        
                        </div>
                    </div>
                   
                    <div className='row  form-group justify-content-center'>
                        <div className='col-18 col-md-10'>
                            <Button color='green' type="submit"  onClick={handleSubmit}>Enviar</Button>
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

