import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./components/layout/Header";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/projects/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Accounts/Login";
import Projects from "./components/projects/allprojects";
import PrivateRoute from "./components/common/PrivateRoutes";
import { loadUser } from "./actions/auth";
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
