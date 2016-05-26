import React from "react";

export default class MIKHeader extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            country: this.props.country,
            selected: "Select Language",
            notice: "This website is in English"
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option) {
        let language = this.refs.selectedLanguage.value;

        this.setState({selected: language});
        if (language == "French") {
            this.setState({notice: "Ce site est en Français"});
        } else {
            this.setState({notice: "This website is in English"});
        }
    }

    render() {

      var dropdownStyle = {
        left: 0,
        display : 'inline-block',
        width:600,  
      }

      var showDropdown = (this.state.country == 'CA');

      return (
          <div>
              <div id="mik-header" role="banner">
                  <div>
                      <div class="simple-logo">
                          <a href="http://www.michaels.com"><img src="logo-simple.png" alt="Michaels"/></a>
                      </div>
                      <div class="simple-links">
                          <a href="http://www.michaels.com/">Shop</a> | 
                          <a href="http://www.michaels.com/coupons">Coupons</a> | 
                          <a href="http://weeklyad.michaels.com/">Weekly Ad</a> | 
                          <a href="http://www.michaels.com/store-locator">Stores</a>
                      </div>
                  </div>
                  <div>
                    {showDropdown ?
                        <div style={dropdownStyle}>
                          <select ref="selectedLanguage" onChange={this._onSelect} placeholder={'English'}>
                            <option value="English">English</option>
                            <option value="French">French</option>
                          </select>
                          <span>  {this.state.notice}</span>
                        </div>
                      : <div></div> 
                    }
                  </div>
              </div>
          </div>
      );
  }
}
