import { Switch } from "react-router-dom";
import MyRoute from "./MyRoute";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

export default function AllRoutes() {

  return (
    <Switch>
      <MyRoute exact path="/" component={ SignIn }/>
      <MyRoute exact path="/register" component={ SignUp }/>
      <MyRoute exact path="/dashboard" component={ Dashboard } isPrivate />
    </Switch>
  );
}