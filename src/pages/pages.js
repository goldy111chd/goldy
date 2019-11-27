import React from "react";
//import { connect } from 'react-redux';
import CRUDSystem from "./CRUDSystem";
import ApiDataShow from "./ApiDataShow";
import UpdateItem from "./Updateitem";
import Removeitem from "./Removeitem";
import Component1 from "./Component1";
import Demo1 from "./Classcomponent";
import Details from "./details";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Pages = () => {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
         renders the first one that matches the current URL. */}
		 <Header/>
		 <div class="main">
        <Switch>
          <Route path="/crudsystem">
            <CRUDSystem />
          </Route>
          <Route path="/apidatashow">
            <ApiDataShow />
          </Route>
          <Route path="/updateitem">
            <UpdateItem />
          </Route>
		  <Route path="/removeitem">
            <Removeitem />
          </Route>
		 <Route path="/component">
            <Component1 />
          </Route>
		  <Route path="/classcomponent">
            <Demo1 />
          </Route>
		  		  <Route path="/details/:detailId" component={Details}>
          </Route>
        </Switch>
		</div>
              </Router>
  );
}


export default Pages;