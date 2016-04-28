import React from "react";


export default class Booking extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:true
    };
  }

  render() {

    var classNames = require('classnames');

    var btnClass = classNames(
        {
          'mod-no-checkout': this.state.showCheckout
        });


    return (

        <div class="mod-no-checkout">
            <div class="m-appointments-title-bar m-tile shadow-1">
                <div class="m-button shadow-1 shadow-hover-2 shadow-active-3"><a href="/">View More Classes</a></div>
                <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Checkout</div>
            </div>
        </div>

    );
  }


}
