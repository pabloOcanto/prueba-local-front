import React, { Component } from 'react';
import alertaTitle from '../../assets/alertaTitle.png'
import footerImg from '../../assets/footerImg.png'
import { IoAddCircleOutline } from 'react-icons/io5';
import { BsFillPatchExclamationFill } from 'react-icons/bs';
import { BsListUl } from 'react-icons/bs';
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { BsImage } from 'react-icons/bs';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css'

//data
const cardsData = [
  {
    title: "Trámite Multinota",
    text: "Secretaria General de Gobernación",
    btnText: 'Iniciar Online'
  },
  {
    title: "Trámite Multinota",
    text: "Ministerio de desarrollo social",
    btnText: 'Iniciar Online'
  },
{
    title: "Trámite Multinota",
    text: "Gobierno de la Provincia de Cordoba errerereerretgrgt",
    btnText: 'Iniciar Online'
  }
];
const notificationsData = [
  {
    title: " Vacunacion Covid 19",
    text: "Refuerzo vacunacion covid",
    daysText: 'hace 12 días'
  },
  {
    title: " Vacunacion Covid 19",
    text: "Refuerzo vacunacion covid",
    daysText: 'hace 12 días'
  },
{
  title: " Vacunacion Covid 19",
    text: "Refuerzo vacunacion covid",
    daysText: 'hace 12 días'
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

// const CardMenu = (props) =>(
//     <div>{props.text}
//     <IoMdAddCircleOutline />
//     <p></p>
//     </div>
// );
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
        <Button >{props.btnText}</Button>
      </div>
    </div>
  </CardHome>

  ;

const Notification = props =>
  <>
    <div className='row p-2'>
      <div className='col-2 pr-0'>
        <IoNotificationsCircleOutline className='card-icon-notification' />
      </div>
      <div className='col-10 pl-0'>
        <p className='title-card m-0 font-weight-bold'>{props.title}</p>
        <p className='sub-title-card m-0'>{props.text}</p>
      </div>
    </div>
    <div className='row justify-content-end'>
      <div className='col-auto' >
        <p className='m-0' style={{ color: '#11A2D7', fontSize: '12px' }}>{props.daysText}</p>
      </div>
    </div>
  </>;


const Home = () => (

  <div className='container'>
    {/* cards */}
    <div className='row mb-4'>
    <div className='col-md-4 col-12'>
        <h3 >e-trámite destacados</h3>
     </div>
      </div>
      <div className='row gy-4'>
      {cardsData.map((item,i)=>{
        return (
          <div className='col-md-4 col-12'>
              <Card icon={IoAddCircleOutline} title={item.title} text={item.text} btnText={item.btnText}></Card>
          </div>)
      })}
      </div>
   
    {/* notificaciones */}
    <div className='row margin-top-card justify-content-between'>
      <div className='col-md-5 col-12 pr-0'>
        <div className='row justify-content-between '>
          <div className='col-md-6 col-12'>
            <h3 className='my-2'>Notificaciones</h3>
          </div>
          <div className='col-6 text-align-card'>
            <p className='my-2 text-align-card' style={{ color: '#999999' }}>Ver Todo</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <CardNotification>
              {notificationsData.map((item, i)=>{
                return <Notification title={item.title} text={item.text} daysText={item.daysText} />
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
            {bannerData.map((item, i)=>{
              return(
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

//pagina anterior, no se si se vaya usar despues
  // <div className='container-fluid'>
  //     <div className="row text-center">
  //         {/* <h2>Area de Administracion</h2>
  //         <h3>Bienvenidos a nuestra web! </h3>
  //         <p> Serivicio de notificaciones alerta confluencia  </p> */}
  //        <div className='col-12'>  <img alt='title' className='img-size ' src={alertaTitle}></img></div>
  //        <div className='col-12'> <h2 className='subtitile'> Área de administración de notificaciones </h2>  </div>


  //     </div>
  //     <div className='row justify-content-center'>
  //         <p className='panel-font'> Panel de accesos directos </p>
  //     </div>
  //     <div className='row justify-content-center'>
  //         <div className='col-md-4 col-9 align-self-center'>
  //           <div className='card-menu'>
  //            <IoAddCircleOutline  className='icon-size'/>
  //            <p className='card-text text-center'>Nueva notificación</p>
  //            </div>
  //         </div>
  //         <div className='col-md-4 col-9 align-self-center'>
  //           <div className='card-menu'>
  //            <BsListUl  className='icon-size'/>
  //            <p className='card-text text-center'>Listado de notificaciones</p>
  //            </div>
  //         </div>
  //         <div className='col-md-4 col-9 align-self-center'>
  //           <div className='card-menu'>
  //            <BsFillPatchExclamationFill  className='icon-size'/>
  //            <p className='card-text text-center'>Reportar un problema</p>
  //            </div>
  //         </div>
  //     </div>

  // </div>    
);

var styles = {

}

export default Home;