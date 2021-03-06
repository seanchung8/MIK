import React from "react";
import MIKHeader from "../components/MIKHeader";
import MIKFooter from "../components/MIKFooter";
import Appointment from "../components/Appointment";
import Checkout from "../components/Checkout";
import  * as PagesActions from "../actions/PagesActions";
import PagesStore from "../stores/PagesStore";
import * as BookingActions from "../actions/BookingActions";
import BookingStore from "../stores/BookingStore";


export default class Booking extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true,
      view:'Booking',
      appointments: BookingStore.getAll()

    };
  }

  startCheckout(){
    this.setState({
      showCheckout: !this.state.showCheckout
    });
  }

  goBackToLanding(){
    PagesActions.updateDisplayed("Landing");
  }

  componentDidMount() {
      if (this.state.showCheckout) {
        window.scrollTo(0,0);
      }
    }

  render() {

    var classNames = require('classnames');

    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout,
          'mod-hide': !this.state.showCheckout
        });

    var apointContain = {

      height:700,
      overflowY : 'scroll'
      
    }
    var footerPos={

      bottom:'0 !important'
    }
    var checkoutCss={
      zIndex:0
    }

    var apointPosCss={
      height:300
    }
    var locKey = 0;
    var appointments = _.map(this.state.appointments, (appointment) => {
                locKey++;
            var tempHolder =

                        <div key={locKey} >
                            <Appointment
                                appointInfo={appointment}

                            />
                        </div>
                return tempHolder;
            })


    var btnApt = classNames(
        {
          'm-appointments-shrink': !this.state.showCheckout,
          'm-appointments': this.state.showCheckout
        });
            var locKey = 0;

    return (
      <div class={btnClass}>
          
          
              
              <div class="m-box-wrapper"> 
              <div class={btnApt}>
                  <div class="m-appointments-title-bar m-tile" >
                      <div class="m-button shadow-hover-2 shadow-active-3" 
                        onClick={()=> this.goBackToLanding()}>
                        View More Classes
                      </div>
                      <div class="m-button shadow-hover-2 shadow-active-3" 
                        onClick={()=> this.startCheckout()}>
                        Checkout
                      </div>
                  </div>
                  <div>
                    <span style={checkoutCss}><Checkout/></span>

                    <span style={apointContain}>{appointments}</span>
                  </div>
              </div>
            
              </div>
              
          
          

      </div>
            
    );
  }


}