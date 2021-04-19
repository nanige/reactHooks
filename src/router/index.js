import React from "react";
import { Route, HashRouter} from "react-router-dom";
import { Switch} from 'react-router'
import AppLayout from  '../layout'
import Login from '../views/login'

function AppRouter() {
  return (
    <HashRouter>
        <Switch>
           <Route path="/login" exact component={Login} />
           <Route path="/" component={AppLayout} />
        </Switch>
    </HashRouter>
  );
}
export default AppRouter;