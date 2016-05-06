import React from "react";
import BookingStore from "../stores/BookingStore";
import BookingActions from "../actions/BookingActions";
import MIKHeader from "../Components/MIKHeader";
import MIKFooter from "../Components/MIKFooter";
import Appointment from "../Components/Appointment";
import Checkout from "../Components/Checkout";

export default class Booking extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true
    };
  }

  startCheckout(){
    this.setState({
      showCheckout: !this.state.showCheckout
    });
    console.log(this.state);
  }


  render() {

    var catStyle = {
            marginRight: 350,
            marginTop: 0,
        };


    var BlankStyle = {
      marginRight:15,
      marginTop:100
    }


    var usedStyle = [this.state.showCheckout?catStyle:BlankStyle];

    var classNames = require('classnames');

    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout,
          'mod-hide': true
        });
        var btnApt = classNames(
        {
          '.m-appointments-shrink': !this.state.showCheckout,
          'm-appointments': this.state.showCheckout
        });


    return (
      <div class={btnClass}>
          
          <div>
              <div><MIKHeader/></div>
              <div class="m-appointments-title-bar m-tile shadow-1">
                  <div class="m-button shadow-1 shadow-hover-2 shadow-active-3"><a href="/">View More Classes</a></div>
                  <div class="m-button shadow-1 shadow-hover-2 shadow-active-3" onClick={()=> this.startCheckout()}>Checkout</div>
              </div>
              
              <div class={btnApt}>

              <div><Appointment/></div>
              <div><MIKFooter/></div>
              </div>
              <Checkout/>

          </div>

      </div>
          
    );
  }


}