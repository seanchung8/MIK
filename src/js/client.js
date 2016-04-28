import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,IndexRouter,hashHistory} from "react-router";

import Layout from "./pages/Layout";
import classesandevents from "./pages/ClassesAndEvents";


//require('../css/bootstrap.css');
//require('../css/ca-header-footer-simple.css');
//require('../css/main');


const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <indexRoute component={Layout}></indexRoute>
        <Route path="layout" component={Layout}></Route>
        <Route path="classesandevents/:country" component={classesandevents}></Route>
    </Route>
</Router>,
    app);
