import React from "react";


export default class Checkout extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:false
    };
  }

  completeOrder(){
    console.log("Completing order");
    setState({showCheckout:!this.state.showCheckout})
  }

  render() {

   

    var classNames = require('classnames');

    var btnComplete = classNames(
      
        {
          'm-checkout mod-hide': true,
          'mod-book': this.state.showCheckout
        });


    return (

      <div class={btnComplete}>
        
        
          <div class="personal-info">
            <div class="personal-title">Personal Information</div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">First Name</label>
            </div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Last Name</label>
            </div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Email</label>
            </div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Phone Number</label>
            </div>
          </div>
          <div class="purchase-info">
            <div class="purchase-title">Payment Information</div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Name</label>
            </div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Billing Address</label>
            </div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Credit Card</label>
            </div>
            <div class="m-input">
              <input type="text" required class="m-input-field" />
              <label class="m-input-label">Security Code</label>
            </div>
          </div>
          
          <div class="m-button shadow-hover-2 shadow-active-3 mod-book" onClick={ ()=> this.setState({ showCheckout: !this.state.showCheckout })}>Purchase Classes</div>
          <div class="thank-you m-tile shadow-2 anim-tile-in">
            <div class="thank-title">Your Class has been booked!</div>
            <div class="thank-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in turpis dapibus, tristique erat a, venenatis est. Aliquam id scelerisque metus. Nullam a maximus nibh. Curabitur auctor bibendum venenatis. Pellentesque et mi vehicula, pharetra est lobortis, mollis sem. In placerat sollicitudin eros et faucibus. Vivamus consectetur commodo egestas. Morbi pretium placerat purus, nec feugiat urna. Aliquam et interdum nibh, in feugiat nisl. In hac habitasse platea dictumst.</div>
            <div class="m-button shadow-hover-2 shadow-active-3 m-button-more">View More Classes</div>
          </div>
          
        </div>
    );
  }


}
