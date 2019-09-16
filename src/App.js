import React from "react";
import NavBar from "./components/navbar";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginform";
import "./App.css";
import MovieForm from "./components/movieForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
