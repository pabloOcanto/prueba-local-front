import React from 'react';
import { Switch, Route, BrowserRouter,Redirect } from 'react-router-dom';
import Login from '../components/Login'
import HomePage from '../pages/Home'
import Notification from '../pages/Notification'
import NotificationsPage from '../pages/Notifications'
import Users from '../pages/User'
import UsersPage from '../pages/Users'
import Context from '../context/Context';
import Navbar from '../components/NavBar/Navbar';

function Routes() {
  return (
    <Context.Consumer>
        {context => (
      <BrowserRouter>
          {true && <Navbar/> }

<Switch>
  {!true && <Route exact path="/" component={Login}/> } 
  {true ?
    <Route exact path="/home" component={HomePage}/>
    :
    <Redirect to="/"/>
  }
  {true ?
    <Route exact path="/notification/create" component={Notification}/>
    :
    <Redirect to="/"/>
  }
  {true ?
    <Route exact path="/notification/list" component={NotificationsPage}/>
    :
    <Redirect to="/"/>
  }     
   {true ?
    <Route exact path="/users/create" component={Users}/>
    :
    <Redirect to="/"/>
  }
  {true ?
    <Route exact path="/users/list" component={UsersPage}/>
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
