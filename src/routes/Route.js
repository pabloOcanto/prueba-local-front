import React from 'react';
import { Switch, Route, BrowserRouter,Redirect } from 'react-router-dom';
import Login from '../components/Login'
import HomePage from '../pages/Home'
import Notification from '../pages/Notification'
import NotificationsPage from '../pages/Notifications'
import Context from '../context/Context';

function Routes() {
  return (
    <Context.Consumer>
        {context => (
      <BrowserRouter>
        <Switch>
          {!context.isLogged && <Route exact path="/" component={Login}/> } 
          {context.isLogged ?
            <Route exact path="/notification/create" component={Notification}/>
            :
            <Redirect to="/"/>
          }
          {context.isLogged ?
            <Route exact path="/home" component={HomePage}/>
            :
            <Redirect to="/"/>
          }

          {context.isLogged ?
            <Route exact path="/notification/list" component={NotificationsPage}/>
            :
            <Redirect to="/"/>
          }                
        </Switch>
      </BrowserRouter>
    )}
    </Context.Consumer>
      
  );
}

export default Routes;