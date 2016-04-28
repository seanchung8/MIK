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
          
          

        /*  <ButtonToolbar>
            <Link to="classesandevents/US"><Button className="btn btn-lg btn-success">Go to Michaels USA</Button></Link>
            <Link to="classesandevents/CA"><Button>Go to Michaels Canada</Button></Link>
          </ButtonToolbar>*/

      </div>
    );
  }
}
