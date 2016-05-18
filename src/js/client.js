import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, useRouterHistory, hashHistory} from "react-router";
import { createHashHistory } from 'history';

import Layout from "./pages/Layout";
import classesandevents from "./pages/ClassesAndEvents";
import Confirmation from "./pages/Confirmation";

//require('../css/bootstrap.css');
//require('../css/ca-header-footer-simple.css');
//require('../css/main');


const app = document.getElementById('app');
const appHistory = useRouterHistory(createHashHistory)({queryKey: false})

ReactDOM.render(
	<Router history={appHistory} onUpdate={() => window.scrollTo(0,0)}>
	    <Route path="/" component={Layout}>
	        <IndexRoute component={Layout}></IndexRoute>
	        <Route path="layout" component={Layout}></Route>
	        <Route path="classesandevents/:country" component={classesandevents}></Route>
	        <Route path="Confirmation/:country" component={Confirmation}></Route>
	    </Route>
	</Router>,
    app
);
