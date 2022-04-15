import React, { useState } from 'react';
import NotifcationService from "../../service/NotificationService"
import { useCookies } from 'react-cookie';
import MaterialTable from "material-table";
import moment from 'moment'


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchNotifications, setNotifications] = useState([]);
  const [cookies] = useCookies(['access_token']);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { title: 'id', field: 'id', width: "5%" },
    { title: 'Topic', field: 'topic' },
    { title: 'Título', field: 'title' },
    { title: 'Área', field: 'area',width: "30%" },
    { title: 'Mensaje', field: 'message',overflow:'hidden',width: "50%",textOverflow: 'ellipsis',whiteSpace: 'nowrap'},
    { title: 'Fecha', field: 'dateCreated' }
  ];

  const  localization={
      pagination: {
          labelDisplayedRows: '{from}-{to} de {count}'
      },
      toolbar: {
          nRowsSelected: '{0} registro(s) seleccionado',
          searchPlaceholder:'Buscar',
          searchTooltip:'Buscar'
      },
      header: {
          actions: 'Acciones'
      },
      body: {
          emptyDataSourceMessage: 'No hay registros para mostrar',
          filterRow: {
              filterTooltip: 'Filtro'
          },
      },
      pagination:{
        labelRowsSelect:'Registros',
        firstTooltip:'Primera página',
        previousTooltip:'Página anterior',
        nextTooltip:'Página siguiente',
        lastTooltip:'Última página',
        labelDisplayedRows:    '{from}-{to} de {count}'
      }
  }

  const  styleOptions={
    rowStyle: {
      fontSize: 12,
    }
  
  }
  

  useState(async () => {
    if (isLoading) {
      const notifications = await NotifcationService.getAll(1,cookies.access_token);
      setNotifications(formatNotificationData(notifications.content));
      setIsLoading(false);
    }
  }, isLoading);

  const formatNotificationData = (notifications)=>{
    return notifications.map(p =>({ ...p, dateCreated: moment(p.dateCreated).format('DD/MM/YYYY HH:MM')}));
  }


  return (
    <div className=''>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable 
                columns={columns} 
                data={fetchNotifications} 
                title='' 
                localization={localization} 
                options={styleOptions}
                />
      </div>
    </div>
  )
}

export default Index;