import React from "react";
import {Redirect,Route,Switch} from 'react-router-dom'
import './App.css';
import { Home,Navi } from "features/common";
import { UserLogin } from "features/user";
import { UserList } from "features/user/components/UserList";
import { UserDetail } from "features/user/components/UserDetail";
import { UserAdd } from "features/user/components/UserAdd";
import { UserModify } from "features/user/components/UserModify";
import { UserRemove } from "features/user/components/UserRemove";

const App = () => (
  <div>
    <Navi/>
      <Switch>
        <Route exact path='/' component= { Home }/>
        <Redirect from='/home' to= { '/' }/>
        <Route exact path = '/userAdd' component = {UserAdd}/>
        <Route exact path = '/userDetail' component = {UserDetail}/>
        <Route exact path = '/userList' component = {UserList}/>
        <Route exact path = '/userLogin' component = {UserLogin}/>
        <Route exact path = '/userModify' component = {UserModify}/>
        <Route exact path = '/userRemove' component = {UserRemove}/>
      </Switch>
  </div>

)
export default App