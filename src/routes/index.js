import { Switch } from "react-router-dom";
import { Customer } from '../pages/Customer';
import NewCalling from '../pages/NewCalling';
import Profile from '../pages/Profile';
import MyRoute from "./MyRoute";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

export default function AllRoutes() {

  return (
    <Switch>
      <MyRoute exact path="/" component={SignIn} />
      <MyRoute exact path="/register" component={SignUp} />
      <MyRoute exact path="/dashboard" component={Dashboard} isPrivate />
      <MyRoute exact path="/profile" component={Profile} isPrivate />
      <MyRoute exact path="/customers" component={Customer} isPrivate />
      <MyRoute exact path="/new-calling" component={NewCalling} isPrivate />
      <MyRoute exact path="/new-calling/:id" component={NewCalling} isPrivate />
    </Switch>
  );
}