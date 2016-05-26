import React from "react";
import * as LocatorActions from "../actions/LocatorActions";
import LocatorStore from "../stores/LocatorStore";
import LocationButton from "../components/LocationButton";
import BookingStore from "../stores/BookingStore";

export default class StoresContainer extends React.Component {

  constructor (props) {
    super(props)
  }


    componentWillUnmount(){
      console.log("in StoreContainer.componentWillUnmount()");
      LocatorStore.removeChangeListener= this._onChange;
    }


  selectLocation(loc){
    console.log('sending location')
    LocatorActions.selectedLocation(loc);
  }


  render() {

    var elementAlign = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    };

    var appointCss = {
      fontSize:18
    }    
    var locked = LocatorStore.isLocationLocked;
    
    var locKey = 0;

    var myStores = LocatorStore.getAll();

    var listItems = myStores.map(function(location, index){
        var locName = location.location['name'];
        
        if(!locked){
          return (
              <div key={index}  >
                  <LocationButton name={locName} location={location.location}/>
              </div>
          )
        }
        else{
          return(
            <div key={index}  class="appointment-occurrence" style={appointCss}>
              <div class="appointment-location-name">{location.location.name}</div>
              </div>
          )
        }
      }.bind(this));
             
    return (
      <div style={elementAlign}>
        <div >{listItems}</div>
      </div>
    );
  }
}
