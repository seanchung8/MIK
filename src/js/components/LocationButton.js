import React from "react";
import * as LocatorActions from "../actions/LocatorActions";
import LocatorStore from "../stores/LocatorStore";
import BookingStore from "../stores/BookingStore"


export default class LocationButton extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: false
    }
  }

  // getInitialState(){
  //   console.log("in StoresContainer.getInitialState()");
  //   return {
  //     this.state = {stores: LocatorStore.getAll()}
  //   }
  // }

    componentDidMount(){
      console.log("in StoreContainer.componentDidMount()");
            BookingStore.on("change", ()=>{
console.log("The single location state: "+this.state);
            // this.state = {
            //     active:BookingStore.IsSelectedLocation(this.props.name)
            // }
            })
    }


    // componentWillUnmount(){
      

          
    //     
      
    // }


  selectLocation(loc){
    console.log('clicked on:' + this.props.name)
    LocatorActions.SelectedLocation(loc);
    this.setState({active:!this.state.active});

  }


  render() {
    console.log(this.state.active)
    var classNames = require('classnames');
    var showDiscription = classNames(
    "m-button shadow-1 shadow-hover-2 shadow-active-3",
    {
        "mod-active": this.state.active
    });

    
             
    return (
      <div class={showDiscription} onClick={()=>this.selectLocation(this.props.location,this.props.location['clientkey'])}>
        {this.props.name}
      </div>
    );
  }
}
