import React,{useState,useContext,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Context from '../../context/Context'
import {Formik} from 'formik';
import initValues from './initialvalues';
import schema from './schema';
import {Button,Div,Error,Form_} from './customElements'; 
import InputText from './InputText';
import Select from './Select';
import ButtonBostrapt from './ButtonBostrapt'
import LoadService from '../../service/LoadService';
import NotifcationService from '../../service/NotificationService';
import NotificationGenerator from '../../utils/NotificationGenerator';
import Regions from './Regions';


const NotificationForm = ({isLogged})=>{
    const history = useHistory();
    const context = useContext(Context);
    const [state,setState] = useState({hasError:false,message:''});
    const [cities,setCities] = useState([]);
    const [topics,setTopics] = useState([]);
    const [isLoadingCity,setLoadingCity] = useState(true);
    const [isLoadingTopic,setLoadingTopic] = useState(true);
    const [count,SetCount] = useState(0);


    
    useEffect(async ()=>{
        if(isLoadingCity){
            const cities = await LoadService.getCities();
            setCities(cities);
            setLoadingCity(false);
        }

    }, 
    [isLoadingCity]);

        
    useEffect(async ()=>{

        if(isLoadingTopic){
            const topics = await LoadService.getTopics();
            setTopics(topics);
            setLoadingTopic(false);
        }
    }, 
    [isLoadingTopic]);



    const addArea = ()=>{
        SetCount(count+1);
    }


    if (isLoadingCity) {
        return <h2>Loading...</h2>;
    }

    if (isLoadingTopic) {
        return <h2>Loading..</h2>;
    }


    return (
        <>
        <Formik
        initialValues={initValues}
        validationSchema={schema}
        onSubmit={async (values, {resetForm}) => {
           try {
               console.log('se registro notificacion')
               const notificacion = NotificationGenerator.generate(values,cities,topics);
               await NotifcationService.send(notificacion);
           } catch (error) {
               setState('No se pudo notificar')
           }
        }}>     

        {props => ( 
        <Div>
        <h4 className='text-center'> formulario de notificaciones </h4>
    
        {state.hasError &&  <Error> {state.message} </Error>}
        <Form_ onSubmit={props.handleSubmit}>
            <Div className='form-group'>
            <InputText id="title" props={props} value={props.values.title}/>          
            <InputText id="message" props={props} value={props.values.message}/>
         
            <Select id="topic" props={props} value={props.values.topic}  elements={topics} />
            <Select id="region" props={props} value={props.values.region}  elements={cities} /> 
            <div id='regions'>
                <Regions count={count}  props={props} cities={cities}/>
            </div>
            <br />
            <ButtonBostrapt addArea={addArea} props={props} />
            <br/>
            <br/>
            <Button type="submit">enviar</Button>
            <br/>
            <br/>
            <Button type="button">resetear</Button>
            </Div>
        </Form_>
        </Div>
    )}  
      </Formik>
      </>        
)};

export default NotificationForm; 