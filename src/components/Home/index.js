import React, { useEffect, useState ,useContext} from 'react';
import NotifcationService from "../../service/NotificationService"
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { BsImage } from 'react-icons/bs';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Context from  '../../context/Context'
import { useCookies } from 'react-cookie';
import './home.css';

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchNotifications, setNotifications] = useState([]);
  const [cookies] = useCookies(['access_token']);
  const context = useContext(Context);

  useState(async () => {
    if (isLoading) {
      const notifications = await NotifcationService.getAll(1,cookies.access_token);
      setNotifications(notifications.content.reverse());
      setIsLoading(false);
    }
  }, isLoading);

  return (
    <div className='container'>
      <div className='row mb-4'>
        <div className='col-md-4 col-12'>
          <h3 >e-trámite destacados</h3>
        </div>
      </div>
      <div className='row gy-4'>
        {cardsData.map((item, i) => {
          return (
            <div className='col-md-4 col-12'>
              <Card key= {i} icon={IoAddCircleOutline} title={item.title} text={item.text} btnText={item.btnText} pathTo={item.pathTo}></Card>
            </div>)
        })}
      </div>

      <div className='row margin-top-card justify-content-between'>
        <div className='col-md-5 col-12 pr-0'>
          <div className='row justify-content-between '>
            <div className='col-md-6 col-12'>
              <h3 className='my-2'>Notificaciones</h3>
            </div>
            <div className='col-6 text-align-card'>             
              <Link to='notification/list' className="my-2 text-align-card" style={{ color: '#999999' }}>Ver Todo</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <CardNotification>
                {(fetchNotifications.reverse()).map((item, i) => {
                  if (i < 3) {
                    return <Notification key= {i} title={item.title} text={item.text} daysText={item.daysText} item={item} />
                  }
                })}
              </CardNotification>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <div className='row justify-content-between'>
            <h3 className='my-2'>Novedades</h3>
          </div>
          <div className='row'>
            <Carousel showStatus={false} className='carousel-bkg'>
              {bannerData.map((item, i) => {
                return (
                  <div className='carousel-div row px-2'>
                    <div className='col-md-8'>
                      <p className='text-start my-2 font-weight-bold'>{item.title}</p>
                    </div>
                    <div className='col-md-3'>
                      <BsImage className='card-icon-notification' />
                    </div>
                    <div className='col-md-12'>
                      <p className='my-2 text-start' style={{ color: '#999999' }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

//Componentes 
const Card = props =>
  <CardHome className='container box'>
    <div className='row'>
      <div className='col-3 pr-0'>
        <IoAddCircleOutline className='card-icon' />
      </div>
      <div className='col-9 pl-0'>
        <p className='title-card m-0'>{props.title}</p>
        <p className='sub-title-card'>{props.text}</p>
      </div>
    </div>
    <div className='row justify-content-end pr-2'>
      <div className='col-auto' >
        <Link to={props.pathTo} className="btn btn-primary">{props.btnText}</Link>
      </div>
    </div>
  </CardHome>

const Notification = props => {
  const { id, area, description, title, topic, userCrearedId, dateCreated } = props.item;
  return (
    <>
      <div className='row p-2'>
        <div className='col-2 pr-0'>
          <IoNotificationsCircleOutline className='card-icon-notification' />
        </div>
        <div className='col-10 pl-0'>
          <p className='title-card m-0 '>{title}</p>
          <p className='sub-title-card m-0'>{area}</p>
          <p className='card-text m-0'>{description}</p>
        </div>
      </div>
      <div className='row justify-content-end'>
        <div className='col-auto' >
          <Moment format="DD/MM/YYYY HH:MM" style={{ color: '#11A2D7', fontSize: '12px' }}>
            {dateCreated}
          </Moment>
        </div>
      </div>
    </>
  );
}


const cardsData = [
  {
    title: "Nueva notificación",
    text: "Generar nueva notificación",
    btnText: 'Ir',
    pathTo: '/notification/create'
  },
  {
    title: "Listado de notificaciones",
    text: "Mostrar listado completo de notificaciones",
    btnText: 'Ir',
    pathTo: '/notification/list'
  },
  {
    title: "Trámite Multinota",
    text: "Gobierno de la Provincia de Cordoba errerereerretgrgt",
    btnText: 'Iniciar Online',
    pathTo: '/home'
  }
];

const bannerData = [
  {
    title: "10 mil Viviendas: créditos para la construccion y compra",
    text: "   Es una iniciativa que busca disminuir el déficit habitacional en la provincia. Son dos lineas de credito hipotecario de 2.400.000 pesos una y de hasta 6.200.000 pesos de la otra"
  },
  {
    title: "10 mil Viviendas: créditos para la construccion y compra",
    text: "   Es una iniciativa que busca disminuir el déficit habitacional en la provincia. Son dos lineas de credito hipotecario de 2.400.000 pesos una y de hasta 6.200.000 pesos de la otra"
  }
];


//Styles
const CardMenu = styled.div.attrs({
})`
    width:15em;
    height:20px;
    border: 2px solid black
  `;
const CardNotification = styled.div.attrs({
})`
    border:2px solid #bfc5d1;
    border-radius: 5px;
    padding:.5em;
    box-shadow: 5px 2px 5px #bfc5d1;
    min-height:18em;
  `;
const CardHome = styled.div.attrs({
})`
    border:2px solid #bfc5d1;
    border-radius: 10px;
    padding:.5em;
    box-shadow: 5px 2px 5px #bfc5d1;
    min-heigth:3em;
  `;

const Button = styled.button.attrs({
})`
    border-radius: 5px;
    color:white;
    box-shadow: 5px 2px 5px #bfc5d1;
    background-color:#354051;
    align-items: flex-end;
    font-size:14px;
  `;