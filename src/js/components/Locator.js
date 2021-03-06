import React from "react";
import _ from "lodash";
import LocationItem from "./LocationItem";
import * as PagesActions from "../actions/PagesActions";
import APIStore from "../stores/APIStore";
import * as APIActions from "../actions/APIActions";
import LocatorStore from "../stores/LocatorStore";


export default class Locator extends React.Component {
    //Class Constructor 
    //Required Props: 
    // country : This is the visitors country of origin 
    
    constructor(props){
        super(props);
        this.state = {
            locations: "",
            min: 0,
            max: 100,
            step: 10,
            changeValue: 10,
            min1: 0,
            max1: 100,
            step1: 10,
            currentValue1: 10,
            value: 1,
            open:false,
            isPressed:false,
            locKey:0,
            country: this.props.country,
            travelRadius: 10,
            maxCost:25,
            isLocationLocked: LocatorStore.isLocationLocked,

        };
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
            APIStore.on("change", ()=>{this.setState({
                locations:APIStore.getLocations(),

            })});
    }


    componentWillUnmount(){
        // Called when the component is removed
        APIStore.removeChangeListener= this._onChange;

    }

    updateSearch(){
        //console.log("update search got hit and this.refs.query val = " + this.refs.query.valueOf());

        if(!this.state.isLocationLocked){
            this.setState({travelRadius: this.refs.travelDistanceInput.value})

            APIActions.fetchStores(this.refs.query.value,this.state.travelRadius,this.state.country)
        }

    }

    updateMaxCost() {
        console.log(">>>in updateMaxCost");
        //this.state.maxCost = this.refs.maxCostInput.value;
        this.setState({maxCost: this.refs.maxCostInput.value});
        console.log(">>>this.state.maxCost:" + this.state.maxCost);

    }

    changeValue(value) {
        this.setState({
            value: value
        });
    }
    
    openLocations(open){
        if(open)
        this.setState({
            OpenLoc: open
        });
    }



    clickedLocation(isClicked,key){

        this.setState({
            isPressed: isClicked,
            locKey:key
        });
    }

    navigation(){


        var navLink = '';

        switch(this.props.viewing){
            case 'Events':
            navLink = 'Classes';
            break;
            case 'Classes':
            navLink = 'Events';
            break;
            case 'CategoryClasses':
            navLink = 'Landing';
            break;
            case 'default':
            console.log("This navigation case not handled: " + this.props.viewing);
            break;
        }

        return navLink;
    }

    pageChange(){

        var nav = this.navigation();
        PagesActions.updateDisplayed(nav);
    }

    render(){
        var value = 10;
        var Slider = require('react-rangeslider');
        var condition;
        if(this.state.open){
            condition = true;
        }
        else{
            condition = false;
        }

        var locked = LocatorStore.isLocationLocked;


        var locs = APIStore.getLocations();

        console.log(locked);

        var nav = this.navigation();
        console.log("view in locator "+this.props.viewing);
        var Clicked =false;

        var locKey = 0;

        var locations= _.map(locs, (location) => {
                locKey++;
            var tempHolder =
                        <div key={locKey} >
                            <LocationItem
                                location={location}
                            />
                            <p/>
                        </div>
                return tempHolder;
            })

        var searchField;
        if(locked){
          searchField =  <input ref="query" value={APIStore.getSearchZip()} readOnly="true" type="text" required class="m-input-field" />
        }
        else{
           searchField = <input ref="query" onChange={ (e) => { this.updateSearch();}} type="text" required class="m-input-field" />
        }


        return(

    <div class="m-sidebar anim-bar-left">
        <div class="m-button shadow-hover-3 shadow-active-4 m-button-toggle" onClick={()=> this.pageChange()}>View {nav}</div>
        <div class="m-input">
            {searchField}
            <label class="m-input-label">Zip Code</label>
        </div>
        <div class="m-slider ">
            <div class="m-slider-label">MAX TRAVEL DISTANCE <span><b>{this.state.travelRadius}</b></span> MILES</div>
            <div>
                <input className="m-slider-line" ref="travelDistanceInput" 
                onInput={ (e) => { this.updateSearch();}}
                type="range" max={this.state.max} min={this.state.min} 
                defaultValue={this.state.travelRadius}/>
            </div>

        </div>
        {condition?
            <div class={"m-editable-list mod-locations"}>
                <div onClick={ ()=> this.setState({ open: !this.state.open })} class="m-button">Show Location List</div>

                    <ul >{locations}</ul>

            </div>
            :
            <div class={"m-editable-list mod-locations mod-closed"}>
                <div onClick={ ()=> this.setState({ open: !this.state.open })} class="m-button">Show Location List</div>

            </div>
        }

        <div class="m-tag ">
            <div class="m-tag-header">AGE GROUP</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Child</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Preteen</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Teenager</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Adult</div>
        </div>
        <div class="m-slider ">
            <div class="m-slider-label">MAX COST <span><b>${this.state.maxCost}</b></span></div>
            <input className="m-slider-line" 
                type="range" 
                ref="maxCostInput" 
                onInput={ (e) => {this.updateMaxCost();} }
                max={this.state.max1} min={this.state.min1} defaultValue={this.state.maxCost} />
        </div>

        <div class="m-editable-list mod-appointments mod-closed">
            <div class="m-button">Show Appointments</div>
            <div class="m-appointments-appointment">
                <div class="m-appointments-name">Face Painting Extravaganza</div>
                <div class="m-appointments-date">Oct. 12th at 11am</div>
                <div class="m-appointments-address">675 Ave of the Americas,
                    New York, NY 10011</div>
            </div>
            <div class="m-appointments-appointment">
                <div class="m-appointments-name">Face Painting Extravaganza</div>
                <div class="m-appointments-date">Oct. 12th at 11am</div>
                <div class="m-appointments-address">675 Ave of the Americas,
                    New York, NY 10011</div>
            </div>
            <div class="m-appointments-appointment">
                <div class="m-appointments-name">Face Painting Extravaganza</div>
                <div class="m-appointments-date">Oct. 12th at 11am</div>
                <div class="m-appointments-address">675 Ave of the Americas,
                    New York, NY 10011</div>
            </div>
        </div>
        <div class="m-button-checkout">Checkout</div>
    </div>


    );
    }


}