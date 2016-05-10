import React from "react";
import * as LocatorActions from "../actions/LocatorActions";
import LocatorStore from "../stores/LocatorStore";

export default class StoresContainer extends React.Component {

  constructor (props) {
    super(props)
  }

  // getInitialState(){
  //   console.log("in StoresContainer.getInitialState()");
  //   return {
  //     this.state = {stores: LocatorStore.getAll()}
  //   }
  // }

    // componentDidMount(){
    //   console.log("in StoreContainer.componentDidMount()");
    //   todoStore.addChangeListener(this._onChange);
    // }

    // componentWillUnmount(){
    //   console.log("in StoreContainer.componentWillUnmount()");
      
    //   todoStore.removeChangeListener(this._onChange);
    // }


  selectLocation(loc){
    console.log('sending location')
    LocatorActions.SelectedLocation(loc);
  }


  render() {

    var elementAlign = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    };

    var locKey = 0;

    var myStores = LocatorStore.getAll();

    var listItems = myStores.map(function(location, index){
        var locName = location.location['name'];
        //console.log("index:" + index +"locName=>" + locName + ":" +location.location['name']);
        return (
            <div key={index} onClick={()=>this.selectLocation(location.location,location.location['clientkey'])} >
                <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">{locName}</div>
            </div>
        )
      }.bind(this));
             
    return (
      <div style={elementAlign}>
        <div class="m-tag">{listItems}</div>
      </div>
    );
  }
}
