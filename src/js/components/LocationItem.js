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
      location: null,
      key: 2384
    };
  }

  componentWillMount(){
    LocatorStore.on("change", ()=>{
      // this.setState({
      //     SelectedLoc: LocatorStore.IsLocationActive(this.state.location),
      // });
      //this.ServiceTypeInit();

    })
      //this.ServiceTypeInit();
  }

  ServiceTypeInit(){

            this.setState({LocName: this.props.location.name});
            this.setState({LocAddress: this.props.location.address1});
            this.setState({LocCity: this.props.location.city});
            this.setState({LocState: this.props.location.state});
            this.setState({LocPostCode: this.props.location.postalcode});
            this.setState({LocPhone: this.props.location.phone});
             this.setState({key: this.props.location.clientkey});
            this.setState({location: this.props.location});
           
            //this.setState({SelectedLoc: this.props.SelectedLoc});
            
  }


  SelectLoc(){
      
      LocatorActions.SelectLocation(this.props.location,!this.state.SelectedLoc,this.props.location.clientkey);
      this.setState({SelectedLoc: !this.state.SelectedLoc});
  }

  render() {

        console.log("Location is active " + LocatorStore.IsLocationActive(this.props.location.clientkey));
        var classNames = require('classnames');




        var btnClass = classNames(
            'm-editable-list-location',
            {

            'mod-active': this.state.SelectedLoc
        });


    return (


        <div class={btnClass} onClick={ ()=> this.SelectLoc()}>

          <div>{this.props.location.name}</div>
          <div>{this.props.location.address1}</div>
          <div>{this.props.location.city}, {this.props.location.state}</div>
          <div>{this.props.location.postalcode}</div>
          <div>{this.props.location.phone}</div>


        </div>
    );
  }


}
