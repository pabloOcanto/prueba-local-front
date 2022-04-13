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
    /*,{ title: 'userCredentialId', field: 'userCredentialId' },
    { title: 'status', field: 'status' }*/
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
   //,cellStyle{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 100}
  //cellStyle:{ maxWidth: 100},
 /* cellStyle :rowData => ({
    textOverflow: (selectedRow === rowData.tableData.id) ? 'elipsis' : 'elipsis' 
  }),
   :{  maxWidth: 100},
  rowStyle: rowData => ({
    backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
    whiteSpace: (selectedRow === rowData.tableData.id) ? 'nowrap' : 'normal',
    overflow: (selectedRow === rowData.tableData.id) ? 'hidden' : 'auto',
    textOverflow: (selectedRow === rowData.tableData.id) ? 'ellipsis' : 'unset',
   // textOverflow: (selectedRow === rowData.tableData.id) ? 'ellipsis' : 'unset',
    //backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
    */
    //cellStyle:{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 100}
    //rowStyle{maxHeigth :10px}
}
  
  /*,cellStyle: rowData => ({
    textOverflow: (selectedRow === rowData.tableData.id) ? 'elipsis' : 'elipsis'  
  })*/




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
               // onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                />
      </div>
    </div>
  )
}

export default Index;