import React from "react";
import 'features/common/style/Layout.css'
// import { Home , Navigation, Main } from "features/common";
// import { UserAdd } from "features/user";
// import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import {Home, Navigation }from 'features/common';
import {UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove} from 'features/user'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Layout(){
    
    return <div className="grid-container">
         <Router>
            <div class="item1">
            <Navigation/>
            </div>
            <div class="item3"> <Switch>
          <Route exact path='/' component= {Home}/>
          <Redirect from='/home' to ={'/'}/>
          <Route exact path='/users/add' component={UserAdd}/>
          <Route exact path='/users/detail' component={UserDetail}/>
          <Route exact path='/users/list' component={UserList}/>
          <Route exact path='/users/login' component={UserLogin}/>
          <Route exact path='/users/modify' component={UserModify}/>
          <Route exact path='/users/remove' component={UserRemove}/>
        </Switch></div>  
            <div class="item5">이건 풋터야!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
            </Router>
        </div>
       
        
        
  
}


