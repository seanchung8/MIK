import React from "react";
import LocatorStore from "../stores/LocatorStore";
import * as LocatorActions from "../actions/LocatorActions";
export default class LocationItem extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      LocName: "Test Name",
      LocAddress: "4848 dfjkl ",
      LocCity: "spo",
      LocState: "kldjf",
      LocPostCode: "94949",
      LocPhone:"40493984",
      SelectedLoc: false,
      location: null
    };
  }

  componentWillMount(){
    LocatorStore.on("change", ()=>{
      this.setState({
          SelectedLoc: LocatorStore.IsLocationActive(this.state.location),
      });
      this.ServiceTypeInit();

    })
      this.ServiceTypeInit();
  }

  ServiceTypeInit(){

            this.setState({LocName: this.props.location.name});
            this.setState({LocAddress: this.props.location.address1});
            this.setState({LocCity: this.props.location.city});
            this.setState({LocState: this.props.location.state});
            this.setState({LocPostCode: this.props.location.postalcode});
            this.setState({LocPhone: this.props.location.phone});
            this.setState({location: this.props.location});
            //this.setState({SelectedLoc: this.props.SelectedLoc});
            
  }


  SelectLoc(){
      
      LocatorActions.SelectLocation(this.state.location,!this.state.SelectedLoc);
      this.setState({SelectedLoc: !this.state.SelectedLoc});
  }

  render() {

        var classNames = require('classnames');

console.log(this.state);


        var btnClass = classNames(
            'm-editable-list-location',
            {

            'mod-active': this.state.SelectedLoc
        });


    return (


        <div class={btnClass} onClick={ ()=> this.SelectLoc()}>

          <div>{this.state.LocName}</div>
          <div>{this.state.LocAddress}</div>
          <div>{this.state.LocCity}, {this.state.LocState}</div>
          <div>{this.state.LocPostCode}</div>
          <div>{this.state.LocPhone}</div>


        </div>
    );
  }


}
