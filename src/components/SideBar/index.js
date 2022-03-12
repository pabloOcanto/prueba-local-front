import { useHistory,useLocation } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = (props) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <>
        <SideNav  
        style={{'background-color': 'blue','height':'130%'}}
        onSelect={(selected) => {
            const to = '/' + selected;
            if (location.pathname !== to) {
                history.push(to);
            }
        }}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="notification">
                <NavIcon>
                    <i className="fa fa-fw fa-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                notificationes
                </NavText>
                <NavItem eventKey="notification/create">
                    <NavText>
                        crear
                    </NavText>
                </NavItem>
                <NavItem eventKey="notification/list">
                    <NavText>
                        listar
                    </NavText>
                </NavItem>
            </NavItem>

            <NavItem eventKey="notification">
                <NavIcon>
                    <i className="fa fa-fw fa-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                salir
                </NavText>
            </NavItem>    
            </SideNav.Nav>
        </SideNav>
     </> 
  );
};

export default Sidebar;