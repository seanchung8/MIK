import React from "react";
import MIKHeader from "../components/MIKHeader";
import MIKFooter from "../components/MIKFooter";
import Appointment from "../components/Appointment";
import Checkout from "../components/Checkout";
import  * as PagesActions from "../actions/PagesActions";
import PagesStore from "../stores/PagesStore"

export default class Booking extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true,
      View:'Booking'
    };
  }

  startCheckout(){
    this.setState({
      showCheckout: !this.state.showCheckout
    });
    console.log(this.state);
  }

  goBackToLanding(){
    PagesActions.UpdateDisplayed("Landing");
  }

  render() {
    console.log("in booking.render(). this.state.showCheckout:" + this.state.showCheckout);

    var classNames = require('classnames');

    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout,
          'mod-hide': !this.state.showCheckout
        });

    var btnApt = classNames(
        {
          'm-appointments-shrink': !this.state.showCheckout,
          'm-appointments': this.state.showCheckout
        });

      
    return (
      <div class={btnClass}>
          
          <div>
              <div><MIKHeader/></div>
              <div class="m-box-wrapper"> 
              <div class={btnApt}>
                  <div class="m-appointments-title-bar m-tile shadow-1">
                      <div class="m-button shadow-hover-2 shadow-active-3" 
                        onClick={()=> this.goBackToLanding()}>
                        View More Classes
                      </div>
                      <div class="m-button shadow-hover-2 shadow-active-3" 
                        onClick={()=> this.startCheckout()}>
                        Checkout
                      </div>
                  </div>

                  <div><Appointment/></div> 
                  <div><Appointment/></div>
                  <div><Appointment/></div>
              </div>
              <Checkout/>
              </div>
              <div><MIKFooter/></div>
          </div>

      </div>
          
    );
  }


}