import { useHistory,useLocation } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import './sideBar.css'
import styled from "styled-components";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Center = styled.div`
    margin-left:10%;
    margin-right:10%;
    width: 100%;
    height: 100%;
`;

const Text = styled.p `
margin:0; 
padding-left:2.5em; 
color:white;
`;
const Sidebar = (props) => {
    const history = useHistory();
    const location = useLocation();
    const widthScreen = window.innerWidth;
    const heightScreen = window.innerHeight;
    console.log(heightScreen)

    return (
        <>
        <SideNav  expanded={widthScreen > 1023}
        style={{'background-color': '#354051', top:'10%', minHeight:'100%'}}
        onSelect={(selected) => {
            const to = '/' + selected; 
            if (location.pathname !== to) {
                history.push(to);
            } 
        }}>
       {widthScreen <= 1023 && <SideNav.Toggle />}
        <SideNav.Nav defaultSelected='home'>
            <NavItem eventKey="home">
                <NavIcon>
                   <AiFillHome className='side-icon-size'/>
                </NavIcon>
                <NavText>
                    Inicio
                </NavText>
            </NavItem>
            <NavItem eventKey="notification" subnavStyle={{'background-color': '#354051','color':'white'}} >
                <NavIcon >
                    <IoMdNotifications className='side-icon-size' />
                </NavIcon>
                <NavText className='nav-text' >
                Notificaciones
                </NavText>
                <NavItem eventKey="notification/create">
                    <NavText >
                       <Text className='sub-nav-text'> Crear</Text>
                    </NavText>
                </NavItem>
                <NavItem eventKey="notification/list">
                    <NavText className='sub-nav-text'>
                    <Text className='sub-nav-text'> Listar</Text>
                    </NavText>
                </NavItem>
            </NavItem>

            <NavItem eventKey="/">
                <NavIcon>
                    <BiLogOutCircle className='side-icon-size'/>
                </NavIcon>
                <NavText>
                Salir
                </NavText>
            </NavItem>    
            </SideNav.Nav>
        </SideNav>
     </> 
  );
};

export default Sidebar;