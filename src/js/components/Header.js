import React from "react";
const options = ['English', 'French']
//require('../css/ca-header-footer-simple.css');
import  * as PagesActions from "../actions/PagesActions";
import PagesStore from "../stores/PagesStore"

export default class Header extends React.Component {

    constructor (props) {
        super(props)
        this.state = {

            country: PagesStore

        }
    }

  render() {

      var condition;
      if (this.props.params.country == 'CA') {
          condition = true;
      }
      else {
          condition = false;
      }

      var selctedLanguage;

      if (placeHolderValue == 'English') {
          selctedLanguage = true;
      }
      else {
          selctedLanguage = false;
      }
      
    return (
    <div id="mik-header" role="banner">
        <header>
            <div class="simple-logo">
                <a href="http://www.michaels.com"><img src="logo-simple.png" alt="Michaels"/></a>
            </div>
            <div class="simple-links">
                <a href="http://www.michaels.com/">Shop</a> | <a href="http://www.michaels.com/coupons">Coupons</a> | <a href="http://weeklyad.michaels.com/">Weekly Ad</a> | <a href="http://www.michaels.com/store-locator">Stores</a>
            </div>
            <div>
                <div>
                    {condition ?
                        <div>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                                      placeholder={placeHolderValue}/>
                            <p/><p/>
                            {selctedLanguage ?
                                <h3>This website is in english</h3>
                                :
                                <h3>Ce site est en français</h3>
                            }
                        </div>
                        : <div><h1>This is the US Site in english</h1></div>
                    }
                </div>

            </div>
        </header>
    </div>
    );

  }
}
