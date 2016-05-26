import React from "react";
import * as LocatorActions from "../actions/LocatorActions";
import BookingStore from "../stores/BookingStore";


export default class LocationButton extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        name: this.props.name,
        active: false
    }
  }

  componentDidMount() {
    //console.log("in LocationButton.componentDidMount() name:" + this.state.name);

    BookingStore.on("change", ()=>{
      var myStatus = BookingStore.isSelectedLocation(this.state.name);
      this.setState({active: myStatus});
      });
  }

  selectLocation(loc) {
    LocatorActions.selectedLocation(loc);
    this.setState({active:!this.state.active});
  }


  render() {
    var classNames = require('classnames');
    var showDiscription = classNames(
    "m-button shadow-1 shadow-hover-2 shadow-active-3",
    {
        "mod-active": this.state.active
    });
             
    return (
      <div class={showDiscription} onClick={()=>this.selectLocation(this.props.location)}>
        {this.props.name}
      </div>
    ); 
  }
}
