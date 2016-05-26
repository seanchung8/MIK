import React from "react";


export default class Appointment extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true,
      appointInfo: this.props.appointInfo,
      isCanceling: false
    };
  }


  cancelAppointment(){



  }

  render() {

    var redTxt = { color:"red"}
    var classNames = require('classnames');
    var apointPosCss={
      height:240
    }
    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout
        });

    return (


        <div class="m-tile m-appointment anim-tile-in" style={apointPosCss}>
          <div class="appointment-image"></div>
          <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 mod-clear-appointment">X</div>
          <div class="appointment-name">{this.state.appointInfo.name}</div>
          <div class="appointment-occurrence">
            <div class="appointment-location-name">{this.state.appointInfo.location.name}</div>
            <div class="appointment-address">{this.state.appointInfo.location.address1},
            <p/>
              {this.state.appointInfo.location.city}, {this.state.appointInfo.location.state} <p/>{this.state.appointInfo.location.postalcode}</div>

            <div class="appointment-time" style={redTxt}>May {this.state.appointInfo.date} at {this.state.appointInfo.time}</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">CHANGE DATE/LOCATION</div>

          </div>
          <div class="appointment-details">
            <div class="attendee-details">
              <div class="attendee-name">{this.state.appointInfo.firstName} {this.state.appointInfo.lastName}</div>
              <div class="attendee-email">{this.state.appointInfo.email}</div>
              <div class="attendee-phone">{this.state.appointInfo.phone}</div>
            </div>
            <div class="attendee-details">
              <div class="attendee-name"></div>
              <div class="attendee-email"></div>
              <div class="attendee-phone"></div>
            </div>

            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">CHANGE DETAILS</div>

          </div>
        </div>
    );
  }


}
