import React from "react";
import BookingStore from "../stores/BookingStore";
import BookingActions from "../actions/BookingActions";
import Header from "../Components/MIKHeader";
import Footer from "../Components/MIKFooter";
import Appointment from "../Components/Appointment";
import Checkout from "../Components/Checkout";

export default class Booking extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:false
    };
  }

  render() {

    var classNames = require('classnames');

    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout
        });


    return (
      <div>
          
          <div>
<div class="mod-no-checkout mod-hide">
              <div class="m-appointments-title-bar m-tile shadow-1">
                  <div class="m-button shadow-1 shadow-hover-2 shadow-active-3"><a href="/">View More Classes</a></div>
                  <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Checkout</div>
              </div>
              
              <div><Appointment/></div>
              <div> <Checkout/></div>

</div>

          </div>
          
        </div>
    );
  }


}