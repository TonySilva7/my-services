import { Switch } from "react-router-dom";
import RouteWrapper from "./RouteWrapper";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

export default function Routes() {

  return (
    <Switch>
      <RouteWrapper exact path="/" component={ SignIn }/>
      <RouteWrapper exact path="/register" component={ SignUp }/>
      <RouteWrapper exact path="/dashboard" component={ Dashboard } isPrivate />
    </Switch>
  );

}

