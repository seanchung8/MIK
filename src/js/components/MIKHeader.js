import React from "react";

//require('../css/ca-header-footer-simple.css');

export default class MIKHeader extends React.Component {



  render() {


      
    return (
    <div id="mik-header" role="banner">
        <div>
            <div class="simple-logo">
                <a href="http://www.michaels.com"><img src="logo-simple.png" alt="Michaels"/></a>
            </div>
            <div class="simple-links">
                <a href="http://www.michaels.com/">Shop</a> | <a href="http://www.michaels.com/coupons">Coupons</a> | <a href="http://weeklyad.michaels.com/">Weekly Ad</a> | <a href="http://www.michaels.com/store-locator">Stores</a>
            </div>
        </div>
    </div>
    );

  }
}
