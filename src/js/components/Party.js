import React from "react";
import * as PagesActions from "../actions/PagesActions";

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
    var backImg = {
        backgroundImage: this.props.pic,
    }

    var classNames = require('classnames');

    return (

        <div class='m-party m-tile anim-tile-in' >
        <div class="m-party-image-event" style={backImg}></div>
            <div class="m-party-description">
                <div class="m-party-description-header" >{this.props.title}</div>
                <div class="m-party-description-text" >{this.props.description}</div>
            </div>
        </div>

    );
  }
}
