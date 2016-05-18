import React from "react";
import MIKHeader from "../components/MIKHeader";
import MIKFooter from "../components/MIKFooter";
import Appointment from "../components/Appointment";
import Checkout from "../components/Checkout";
import  * as PagesActions from "../actions/PagesActions";
import PagesStore from "../stores/PagesStore"
import * as BookingActions from "../actions/BookingActions"
import BookingStore from "../stores/BookingStore"


export default class Booking extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true,
      View:'Booking',
      appointments: BookingStore.getAll()
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

  componentDidMount() {
      if (this.state.showCheckout) {
        window.scrollTo(0,0);
      }
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
            var locKey = 0;

        var appointments = _.map(this.state.appointments, (appointment) => {
                locKey++;
            var tempHolder =

                        <div key={locKey} >
                            <Appointment
                                appointInfo={appointment}

                            />
                            <p/>
                        </div>

                return tempHolder;
            })
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

                  <div>{appointments}</div> 
                  
              </div>
              <Checkout/>
              </div>
              <div><MIKFooter/></div>
          </div>

      </div>
          
    );
  }


}