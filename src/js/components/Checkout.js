import React from "react";


export default class Checkout extends React.Component {


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


        <div class="m-checkout mod-hide">
          <div class="personal-info">
            <div class="personal-title">Personal Information</div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">First Name</label>
            </div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Last Name</label>
            </div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Email</label>
            </div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Phone Number</label>
            </div>
          </div>
          <div class="purchase-info">
            <div class="purchase-title">Payment Information</div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Name</label>
            </div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Billing Address</label>
            </div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Credit Card</label>
            </div>
            <div class="m-input shadow-1">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Security Code</label>
            </div>
          </div>
          <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 mod-book">Purchase Classes</div>
          <div class="thank-you m-tile shadow-2 anim-tile-in">
            <div class="thank-title">Your Class has been booked!</div>
            <div class="thank-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in turpis dapibus, tristique erat a, venenatis est. Aliquam id scelerisque metus. Nullam a maximus nibh. Curabitur auctor bibendum venenatis. Pellentesque et mi vehicula, pharetra est lobortis, mollis sem. In placerat sollicitudin eros et faucibus. Vivamus consectetur commodo egestas. Morbi pretium placerat purus, nec feugiat urna. Aliquam et interdum nibh, in feugiat nisl. In hac habitasse platea dictumst.</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 m-button-more">View More Classes</div>
          </div>
        </div>
    );
  }


}
