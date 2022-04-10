import React, { useState } from 'react';
import NotifcationService from "../../service/NotificationService"
import { useCookies } from 'react-cookie';
import MaterialTable from "material-table";
import { AddBox, ArrowDownward,Search } from "@material-ui/icons";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchNotifications, setNotifications] = useState([]);
  const [cookies] = useCookies(['access_token']);

  const columns = [
    { title: 'id', field: 'id' },
    { title: 'topic', field: 'topic' },
    { title: 'title', field: 'title' },
    { title: 'area', field: 'area' },
    { title: 'description', field: 'description' },
    { title: 'dateCreated', field: 'dateCreated' },
    { title: 'userCredentialId', field: 'userCredentialId' },
    { title: 'status', field: 'status' }
  ];

 const data = [
  {
    "id": "62533314a91d2016b8f9165b",
    "topic": "FUELWORKS",
    "title": "GEEKULAR",
    "area": "Sterling, Alabama, 3217",
    "description": "Eternis",
    "dateCreated": "2019-05-27T04:24:27 +06:00",
    "userCredentialId": 29,
    "status": "blue"
  },
  {
    "id": "625333144cf9912adbd57f80",
    "topic": "GEEKOLA",
    "title": "EARTHMARK",
    "area": "Kennedyville, Alaska, 8009",
    "description": "Ontality",
    "dateCreated": "2016-10-23T06:55:00 +06:00",
    "userCredentialId": 40,
    "status": "blue"
  },
  {
    "id": "625333143bda022751b59d1d",
    "topic": "GAPTEC",
    "title": "SLOFAST",
    "area": "Elfrida, Mississippi, 1092",
    "description": "Teraprene",
    "dateCreated": "2020-02-05T08:52:58 +07:00",
    "userCredentialId": 40,
    "status": "green"
  },
  {
    "id": "6253331417bcbd17e026f1a0",
    "topic": "SURELOGIC",
    "title": "ASIMILINE",
    "area": "Reinerton, Michigan, 5226",
    "description": "Unq",
    "dateCreated": "2021-10-03T12:09:29 +06:00",
    "userCredentialId": 22,
    "status": "brown"
  },
  {
    "id": "625333141050508bced084c5",
    "topic": "FROLIX",
    "title": "ENDICIL",
    "area": "Homeland, Indiana, 4730",
    "description": "Premiant",
    "dateCreated": "2019-01-03T05:03:54 +07:00",
    "userCredentialId": 37,
    "status": "brown"
  },
  {
    "id": "625333141e4e0806cf969b79",
    "topic": "ZOLAREX",
    "title": "QUAILCOM",
    "area": "Caroline, Colorado, 7985",
    "description": "Eplosion",
    "dateCreated": "2017-10-17T05:02:42 +06:00",
    "userCredentialId": 23,
    "status": "brown"
  },
  {
    "id": "62533314a163a443a6cbfa66",
    "topic": "ZANYMAX",
    "title": "KINDALOO",
    "area": "Rockbridge, New Hampshire, 1487",
    "description": "Ginkogene",
    "dateCreated": "2021-08-02T06:17:31 +06:00",
    "userCredentialId": 37,
    "status": "brown"
  },
  {
    "id": "625333148f490a58d01d13f4",
    "topic": "EXODOC",
    "title": "IDEALIS",
    "area": "Colton, New York, 3512",
    "description": "Ecstasia",
    "dateCreated": "2015-05-05T11:48:11 +06:00",
    "userCredentialId": 28,
    "status": "blue"
  },
  {
    "id": "62533314b244d3b870dbdca8",
    "topic": "GADTRON",
    "title": "ZENTIA",
    "area": "Mulberry, Virginia, 1360",
    "description": "Emtrac",
    "dateCreated": "2015-01-21T11:36:39 +07:00",
    "userCredentialId": 37,
    "status": "green"
  },
  {
    "id": "625333141bb6a061f9984c8e",
    "topic": "DUOFLEX",
    "title": "NETUR",
    "area": "Outlook, New Jersey, 4570",
    "description": "Entality",
    "dateCreated": "2019-08-22T07:39:18 +06:00",
    "userCredentialId": 32,
    "status": "brown"
  },
  {
    "id": "62533314d1f8f2dc509d1fc7",
    "topic": "GALLAXIA",
    "title": "QIMONK",
    "area": "Valmy, Iowa, 2583",
    "description": "Zensus",
    "dateCreated": "2018-10-29T05:51:48 +07:00",
    "userCredentialId": 27,
    "status": "green"
  },
  {
    "id": "6253331442113e5ec1c2532b",
    "topic": "EZENT",
    "title": "PHEAST",
    "area": "Bainbridge, West Virginia, 7502",
    "description": "Musix",
    "dateCreated": "2016-07-08T05:04:48 +06:00",
    "userCredentialId": 36,
    "status": "green"
  },
  {
    "id": "62533314c723cef883ffd4ba",
    "topic": "MEGALL",
    "title": "COMBOT",
    "area": "Thornport, District Of Columbia, 7253",
    "description": "Biospan",
    "dateCreated": "2015-01-23T11:10:43 +07:00",
    "userCredentialId": 22,
    "status": "brown"
  },
  {
    "id": "625333142e9967a1d617f798",
    "topic": "UNIWORLD",
    "title": "CUIZINE",
    "area": "Robbins, Minnesota, 7528",
    "description": "Zillan",
    "dateCreated": "2021-03-09T03:15:57 +07:00",
    "userCredentialId": 39,
    "status": "blue"
  },
  {
    "id": "62533314f5cad165b8a7f672",
    "topic": "COMTOUR",
    "title": "DIGIRANG",
    "area": "Ona, North Carolina, 8531",
    "description": "Verton",
    "dateCreated": "2017-12-15T09:02:26 +07:00",
    "userCredentialId": 21,
    "status": "blue"
  },
  {
    "id": "62533314b74535db62560e1c",
    "topic": "LUMBREX",
    "title": "BUZZNESS",
    "area": "Wyoming, Hawaii, 1721",
    "description": "Magnemo",
    "dateCreated": "2021-06-02T10:07:56 +06:00",
    "userCredentialId": 31,
    "status": "brown"
  },
  {
    "id": "625333147001a69e4e6fc146",
    "topic": "INTRADISK",
    "title": "PETIGEMS",
    "area": "Goodville, Maine, 8960",
    "description": "Isologix",
    "dateCreated": "2021-11-02T07:25:12 +07:00",
    "userCredentialId": 28,
    "status": "green"
  },
  {
    "id": "625333145121883b6f515602",
    "topic": "ZAPHIRE",
    "title": "HELIXO",
    "area": "Wacissa, Kansas, 2336",
    "description": "Repetwire",
    "dateCreated": "2021-12-30T01:11:49 +07:00",
    "userCredentialId": 40,
    "status": "green"
  },
  {
    "id": "6253331490d0dfd63a12c46a",
    "topic": "CRUSTATIA",
    "title": "KANGLE",
    "area": "Belvoir, Nevada, 5106",
    "description": "Boilcat",
    "dateCreated": "2017-12-08T10:03:27 +07:00",
    "userCredentialId": 40,
    "status": "green"
  },
  {
    "id": "62533314c8f984a96908e775",
    "topic": "COMTEXT",
    "title": "EXTRAGENE",
    "area": "Lumberton, Guam, 5755",
    "description": "Visalia",
    "dateCreated": "2019-04-20T03:02:17 +06:00",
    "userCredentialId": 21,
    "status": "green"
  },
  {
    "id": "625333146654ff62d3b98d9d",
    "topic": "KROG",
    "title": "BYTREX",
    "area": "Noxen, South Carolina, 674",
    "description": "Eventix",
    "dateCreated": "2016-01-05T07:17:21 +07:00",
    "userCredentialId": 27,
    "status": "blue"
  },
  {
    "id": "62533314563357b0c4be99b5",
    "topic": "IRACK",
    "title": "GENMOM",
    "area": "Gardners, Washington, 211",
    "description": "Tsunamia",
    "dateCreated": "2016-10-06T09:23:58 +06:00",
    "userCredentialId": 25,
    "status": "brown"
  },
  {
    "id": "6253331440de3e6d2520766f",
    "topic": "QUONK",
    "title": "COSMETEX",
    "area": "Libertytown, Arizona, 6338",
    "description": "Sportan",
    "dateCreated": "2014-11-19T05:49:14 +07:00",
    "userCredentialId": 40,
    "status": "blue"
  },
  {
    "id": "62533314bce64dcf03bb5d3b",
    "topic": "SLAX",
    "title": "CALLFLEX",
    "area": "Loretto, Montana, 1493",
    "description": "Tingles",
    "dateCreated": "2015-06-24T10:23:25 +06:00",
    "userCredentialId": 24,
    "status": "blue"
  },
  {
    "id": "625333147279387d94976207",
    "topic": "KOZGENE",
    "title": "PARCOE",
    "area": "Orovada, Texas, 399",
    "description": "Essensia",
    "dateCreated": "2019-02-19T04:05:47 +07:00",
    "userCredentialId": 26,
    "status": "brown"
  },
  {
    "id": "62533314a0b6eab80a1e23cc",
    "topic": "MAKINGWAY",
    "title": "AUTOGRATE",
    "area": "Bedias, Oregon, 5893",
    "description": "Prosure",
    "dateCreated": "2019-05-30T08:34:58 +06:00",
    "userCredentialId": 29,
    "status": "brown"
  },
  {
    "id": "625333148d04fe9a3aefe6f4",
    "topic": "ZIDOX",
    "title": "ZENSURE",
    "area": "Dennard, Kentucky, 8075",
    "description": "Zillactic",
    "dateCreated": "2017-02-12T11:10:20 +07:00",
    "userCredentialId": 35,
    "status": "blue"
  },
  {
    "id": "625333144621badacf640cb2",
    "topic": "PAWNAGRA",
    "title": "ENQUILITY",
    "area": "Cawood, Massachusetts, 3974",
    "description": "Snacktion",
    "dateCreated": "2015-06-12T04:21:54 +06:00",
    "userCredentialId": 32,
    "status": "green"
  },
  {
    "id": "62533314216ee2650bbf6b2f",
    "topic": "WAAB",
    "title": "PAPRICUT",
    "area": "Welda, Palau, 9541",
    "description": "Diginetic",
    "dateCreated": "2014-04-02T08:46:42 +07:00",
    "userCredentialId": 36,
    "status": "brown"
  },
  {
    "id": "625333145d0515be165cf05a",
    "topic": "RUBADUB",
    "title": "CORPORANA",
    "area": "Machias, Marshall Islands, 2339",
    "description": "Geekology",
    "dateCreated": "2016-04-29T07:29:33 +06:00",
    "userCredentialId": 34,
    "status": "green"
  },
  {
    "id": "62533314d39e86e05c2682ca",
    "topic": "KONNECT",
    "title": "ZILPHUR",
    "area": "Konterra, South Dakota, 6854",
    "description": "Uplinx",
    "dateCreated": "2017-08-19T04:13:14 +06:00",
    "userCredentialId": 40,
    "status": "blue"
  },
  {
    "id": "625333144172704a0a6ba18a",
    "topic": "PROSELY",
    "title": "LIMAGE",
    "area": "Newry, Utah, 6687",
    "description": "Imageflow",
    "dateCreated": "2019-09-19T06:04:14 +06:00",
    "userCredentialId": 38,
    "status": "brown"
  },
  {
    "id": "625333142258d86eae8d8a4c",
    "topic": "ZINCA",
    "title": "SYBIXTEX",
    "area": "Kraemer, Delaware, 9568",
    "description": "Jumpstack",
    "dateCreated": "2017-09-02T04:00:44 +06:00",
    "userCredentialId": 31,
    "status": "green"
  },
  {
    "id": "62533314be873015394b4fee",
    "topic": "DATACATOR",
    "title": "LYRICHORD",
    "area": "Remington, Missouri, 8895",
    "description": "Pearlessa",
    "dateCreated": "2018-01-09T08:26:07 +07:00",
    "userCredentialId": 32,
    "status": "green"
  }
]

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

  useState(async () => {
    if (isLoading) {
      const notifications = await NotifcationService.getAll(1,cookies.access_token);
      setNotifications(notifications.content);
      setIsLoading(false);
    }
  }, isLoading);


  return (
    <div className=''>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable columns={columns} data={data} title='' localization={localization}/>
      </div>
    </div>
  )
}

export default Index;