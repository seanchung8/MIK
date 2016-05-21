import React from "react";
import * as PagesActions from "../actions/PagesActions"
import BookingStore from "../stores/BookingStore"


export default class Checkout extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showCheckout:false,
      fName: BookingStore.getSelectedFirstName(),
      lName: BookingStore.getSelectedLastName(),
      email: BookingStore.getSelectedEmail(),
      phone: BookingStore.getSelectedPhone()

    };
  }

  goToLanding(){
    PagesActions.UpdateDisplayed("Landing");
  }

  showConfirmation() {
    this.setState({ showCheckout: !this.state.showCheckout });
    window.scrollTo(0,0);
  }

  updateFirstName(){
        this.setState({fName:this.refs.fName.value});
  }

  updateLastName(){

      this.setState({lName:this.refs.lName.value});
  }

  updatePhone(){
      this.setState({phone:this.refs.phone.value});
  }

  updateEmail(){
      this.setState({email:this.refs.email.value});
  }

  render() {

    if (this.state.showCheckout) {
      return (
        <div class="m-checkout thank-you m-tile anim-tile-in">
          <div class="thank-title">Your Class has been booked!</div>
          <div class="thank-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in turpis dapibus, tristique erat a, venenatis est. Aliquam id scelerisque metus. Nullam a maximus nibh. Curabitur auctor bibendum venenatis. Pellentesque et mi vehicula, pharetra est lobortis, mollis sem. In placerat sollicitudin eros et faucibus. Vivamus consectetur commodo egestas. Morbi pretium placerat purus, nec feugiat urna. Aliquam et interdum nibh, in feugiat nisl. In hac habitasse platea dictumst.</div>
          <div class="m-button shadow-hover-2 shadow-active-3 m-button-more" onClick={()=>this.goToLanding()}>View More Classes</div>
        </div>
      );
    } 
    else {
      return (

        <div class='m-checkout mod-hide'>
            <div class="personal-info">
              <div class="personal-title">PERSONAL INFORMATION</div>
              <div class="m-input">
                <input type="text" value={this.state.fName} onChange={()=>this.getSelectedFirstName()} required class="m-input-field" />
                <label class="m-input-label">FIRST NAME</label>
              </div>
              <div class="m-input">
                <input type="text" value={this.state.lName} onChange={()=>this.getSelectedLastName()} required class="m-input-field" />
                <label class="m-input-label">LAST NAME</label>
              </div>
              <div class="m-input">
                <input type="text" value={this.state.email} onChange={()=>this.getSelectedEmail()} required class="m-input-field" />
                <label class="m-input-label">EMAIL</label>
              </div>
              <div class="m-input">
                <input type="text" value={this.state.phone} onChange={()=>this.getSelectedPhone()} required class="m-input-field" />
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
              onClick={ ()=> this.showConfirmation()}>
              Purchase Classes
            </div>
          </div>
        );
    }
  }
}
