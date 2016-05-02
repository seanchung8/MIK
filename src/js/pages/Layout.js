import React from "react";
import {Link} from "react-router"
//import './../../css/style.css';
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Body from "./../components/Body";
import { Button,ButtonToolbar } from 'react-bootstrap';

export default class Layout extends React.Component {


    navigate(){
        this.props.history.replaceState(null,"/")
    }
  render() {
      

    return (
      <div>

          
          {this.props.children}
          
          

       
            <Link to="classesandevents/US"><button className="btn btn-lg btn-success">Go to Michaels USA</button></Link>
            <Link to="classesandevents/CA"><button>Go to Michaels Canada</button></Link>
          

      </div>
    );
  }
}
