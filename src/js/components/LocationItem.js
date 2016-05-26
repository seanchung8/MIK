import React from "react";
import LocatorStore from "../stores/LocatorStore";
import * as LocatorActions from "../actions/LocatorActions";
export default class LocationItem extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      locName: "Spokane Store",
      locAddress: "555 N Division St.",
      locCity: "Spokane",
      locState: "WA",
      locPostCode: "99999",
      locPhone:"5555555555",
      selectedLoc: false,
      location: null,
      key: 1000
    };
  }

  componentWillMount(){
    LocatorStore.on("change", ()=>{

    })
  }

  serviceTypeInit(){

    this.setState({locName: this.props.location.name});
    this.setState({locAddress: this.props.location.address1});
    this.setState({locCity: this.props.location.city});
    this.setState({locState: this.props.location.state});
    this.setState({locPostCode: this.props.location.postalcode});
    this.setState({locPhone: this.props.location.phone});
    this.setState({key: this.props.location.clientkey});
    this.setState({location: this.props.location});
            
  }


  selectLoc(){
      
      LocatorActions.selectLocation(this.props.location,!this.state.selectedLoc,this.props.location.clientkey);
      this.setState({selectedLoc: !this.state.selectedLoc});
  }

  render() {

        //console.log("Location is active " + LocatorStore.IsLocationActive(this.props.location.clientkey));
        var classNames = require('classnames');
        
        var btnClass = classNames(
            'm-editable-list-location',
            {

            'mod-active': this.state.selectedLoc
        });


    return (


        <div class={btnClass} onClick={ ()=> this.selectLoc()}>

          <div>{this.props.location.name}</div>
          <div>{this.props.location.address1}</div>
          <div>{this.props.location.city}, {this.props.location.state}</div>
          <div>{this.props.location.postalcode}</div>
          <div>{this.props.location.phone}</div>


        </div>
    );
  }


}
