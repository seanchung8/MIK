import React from "react";


export default class Checkout extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:false
    };
  }

  render() {

    if (this.state.showCheckout) {
      return (
        <div class="m-checkout thank-you m-tile shadow-2 anim-tile-in">
          <div class="thank-title">Your Class has been booked!</div>
          <div class="thank-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in turpis dapibus, tristique erat a, venenatis est. Aliquam id scelerisque metus. Nullam a maximus nibh. Curabitur auctor bibendum venenatis. Pellentesque et mi vehicula, pharetra est lobortis, mollis sem. In placerat sollicitudin eros et faucibus. Vivamus consectetur commodo egestas. Morbi pretium placerat purus, nec feugiat urna. Aliquam et interdum nibh, in feugiat nisl. In hac habitasse platea dictumst.</div>
          <div class="m-button shadow-hover-2 shadow-active-3 m-button-more">View More Classes</div>
        </div>
      );
    } 
    else {
      return (

        <div class='m-checkout'>
            <div class="personal-info">
              <div class="personal-title">PERSONAL INFORMATION</div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">FIRST NAME</label>
              </div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">LAST NAME</label>
              </div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">EMAIL</label>
              </div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">PHONE NUMBER</label>
              </div>
            </div>
            <div class="purchase-info">
              <div class="purchase-title">PAYMENT INFORMATION</div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">NAME</label>
              </div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">BILLING ADDRESS</label>
              </div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">CREDIT CARD</label>
              </div>
              <div class="m-input">
                <input type="text" required class="m-input-field" />
                <label class="m-input-label">SECURITY CODE</label>
              </div>
            </div>

            <div class="m-button shadow-hover-2 shadow-active-3 mod-book" 
              onClick={ ()=> this.setState({ showCheckout: !this.state.showCheckout })}>
              Purchase Classes
            </div>
          </div>
        );
    }
  }
}
