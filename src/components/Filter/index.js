
import React, { useEffect, useState } from 'react';
import NotifcationService from "../../service/NotificationService"
import Table from '../Table'



const Index = ({ input, rows }) => {
    //TODO CALCULAR LA PAGINACION
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(async () => {
        if (isLoading) {
            const notifications = await NotifcationService.getAll(1);
            setData(notifications);
            setLoading(false);
        }
    }, isLoading)

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    const filteredData = data.filter((el) => {
        if (input.length === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.title.toString().toLowerCase().includes(input)
        }
    });

    return (
        <>
            <Table data={filteredData} rowsPerPage={rows} />
        </>
    )
}

export default Index;