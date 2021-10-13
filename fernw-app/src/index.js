import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Aktivitaeten from "views/Aktivitaeten/Aktivitaeten.js";
import Pauschalreisen from "views/Pauschalreisen/Pauschalreisen.js";
import Reisemittel from "views/Reisemittel/Reisemittel.js";
import Unterkunft from "views/Unterkunft/Unterkunft.js";
import Impressum from "views/Impressum/Impressum.js";
import Datenschutz from "views/Datenschutz/Datenschutz.js";
import Ferienwohnung from "views/Unterkunft/Ferienwohnung/Unterkunft.js";
import Hotel from "views/Unterkunft/Hotel/Unterkunft.js";
import Appartement from "views/Unterkunft/Appartement/Unterkunft.js";
import Kreuzfahrtschiff from "views/Unterkunft/Kreuzfahrtschiff/Unterkunft.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/beispiele" component={Components} />
      <Route path="/aktivitaeten" component={Aktivitaeten} />
      <Route path="/pauschalreisen" component={Pauschalreisen} />
      <Route path="/reisemittel" component={Reisemittel} />
      <Route path="/unterkunft" exact component={Unterkunft} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/Datenschutz" component={Datenschutz} />
      <Route path="/unterkunft/ferienwohnung" component={Ferienwohnung} />
      <Route path="/unterkunft/hotel" component={Hotel} />
      <Route path="/unterkunft/appartement" component={Appartement} />
      <Route path="/unterkunft/kreuzfahrtschiff" component={Kreuzfahrtschiff} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
