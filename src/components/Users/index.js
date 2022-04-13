import React, { useState } from 'react';
import UserService from "../../service/UserService"
import { useCookies } from 'react-cookie';
import MaterialTable from "material-table";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setData] = useState();
  const [cookies] = useCookies(['access_token']);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { title: 'id', field: 'id', width: "5%" },
    { title: 'DNI', field: 'dni' },
    { title: 'Email', field: 'email' },
    { title: 'Nombre completo', field: 'fullName'},
    { title: 'Teléfono', field: 'mobilePhone'},
    { title: 'Rol', field: 'rol' },
    { title: 'Estatus', field: 'status' }
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
    //if (isLoading) {
      const users = await UserService.getAll(cookies.access_token);
      setData(users.content);
      setIsLoading(false);
    
  }, isLoading);

  return (
    <div className=''>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable 
                columns={columns} 
                data={fetchData} 
                title='' 
                localization={localization} 
                options={styleOptions}           
                />
      </div>
    </div>
  )
}

export default Index;