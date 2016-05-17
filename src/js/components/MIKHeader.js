import React from "react";
const options = ['English', 'French']
import Dropdown from 'react-dropdown'
//require('../css/ca-header-footer-simple.css');

export default class MIKHeader extends React.Component {


    constructor (props) {
        super(props)
        this.state = {
            country: this.props.country,
            selected: "Select Language",
           
        }
        this._onSelect = this._onSelect.bind(this)
    }


        _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option.label})
    }

    render() {

      console.log("State in header: " + this.state.selected);

      const defaultOption = this.state.selected
      

      var DropdownStyle = {
        left: 0,
        display : 'inline-block',
        width:1000,  
            }

      var condition;
      if (this.state.country == 'CA') {
          condition = true;
      }
      else {
          condition = false;
      }

      var selctedLanguage;

      if (this.state.selected == 'English') {
          selctedLanguage = true;
      }
      else if(this.state.selected == 'Select Language'){
           selctedLanguage = true;
      }
      else {
          selctedLanguage = false;
      }
      
    return (
        <div>
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
                <div style={DropdownStyle}>
                    {condition ?
                        <div>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder={'English'}/>
                                
                                    {selctedLanguage ?
                                        <div>This website is in english</div>
                                    :
                                        <div>Ce site est en français</div>
                                    }
                                    
                        </div>
                    : <div></div>
                    }
                </div>
        </div>
    );

  }
}
