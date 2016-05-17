import React from "react";
import { Panel,Grid,Col,Row,ResponsiveEmbed,Button,Jumbotron,Image,Well} from 'react-bootstrap';

import * as PagesActions from "../actions/PagesActions"
import StoresContainer from "./StoresContainer"

export default class Party extends React.Component {

    //Class Constructor
    //Optional Props:
    //Description: When used this will be the discription used on the page. If not used the default state will be used.
    //Title: When used this will be the discription used on the page. If not used the default state will be used.
    constructor(props){
        super(props);
        this.state = {
            showDiscription:true
        };
    }

    componentWillMount(){
    }

    setPage(){

        PagesActions.UpdateDisplayed("Party");

    }


  render() {
    var BackImg = {
        backgroundImage: this.props.Pic,
    }

    var classNames = require('classnames');

    return (

        <div class='m-party m-tile anim-tile-in' >
        <div class="m-party-image-event" style={BackImg}></div>
            <div class="m-party-description">
                <div class="m-party-description-header" >{this.props.Title}</div>
                <div class="m-party-description-text" >{this.props.Description}</div>
            </div>
        </div>

    );
  }
}
