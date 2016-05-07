import React from "react";


export default class Appointment extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true
    };
  }

  render() {

    var redTxt = { color:"red"}
    var classNames = require('classnames');

    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout
        });


    return (


        <div class="m-tile m-appointment anim-tile-in">
          <div class="appointment-image"></div>
          <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 mod-clear-appointment">X</div>
          <div class="appointment-name">FINGER PAINTING</div>
          <div class="appointment-occurrence">
            <div class="appointment-location-name">MICHAEL'S QUEENS</div>
            <div class="appointment-address">240 Broadway,
              New York, NY 10007</div>

            <div class="appointment-time" style={redTxt}>January 3rd at 12:30pm</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">CHANGE DATE/LOCATION</div>

          </div>
          <div class="appointment-details">
            <div class="attendee-details">
              <div class="attendee-name">Rafe Lepre</div>
              <div class="attendee-email">rafe.lepre@skedge.me</div>
              <div class="attendee-phone">1412947743</div>
            </div>
            <div class="attendee-details">
              <div class="attendee-name">Jane Doe</div>
              <div class="attendee-email">Jane.Doe@skedge.me</div>
              <div class="attendee-phone">1412947743</div>
            </div>
<<<<<<< HEAD
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">CHANGE DETAILS</div>

          </div>
        </div>
    );
  }


}
