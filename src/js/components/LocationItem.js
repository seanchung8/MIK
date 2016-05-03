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


        <div class="">

        </div>
    );
  }


}
