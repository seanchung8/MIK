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
        // Called the first time the component is loaded right before the component is added to the page
        //this.ServiceTypeInit();
        // var locs = LocatorStore.getAll();
        // console.log(">>>Selected locations:" + locs);

        // for(var i =0;i < locs.length; i++){
        //     console.log(">>>" + locs[i].id + "-" + locs[i].location + locs[i].selected);
        
        // }
    }

    // ServiceTypeInit(){


    //         if(this.props.Description != null || this.props.Description != " ") {
    //             this.setState({Description: this.props.Description});
    //         }

    //         if(this.props.Title != null || this.props.Title != " ") {
    //             this.setState({Title: this.props.Title});
    //         }


    // }

    setPage(){

        PagesActions.UpdateDisplayed("Party");

    }


  render() {
      var BackImg = {
          backgroundImage: this.props.Pic,
      }


      var classNames = require('classnames');
      // var showDiscription = classNames(
      //     'm-service m-tile shadow-2 anim-tile-in',
      //     {
      //         'mod-details': this.state.showDiscription,
      //         'mod-times': this.state.showTimes,
      //         'mod-booking': this.state.showBooking
      //     });



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
