import React from 'react';
import _ from 'lodash';
import xml2js from 'xml2js';
import LocationItem from './LocationItem';
import PagesStore from '../stores/PagesStore';
import * as PagesActions from '../actions/PagesActions';

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
            maxCost:25
        };
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.search();
        console.log(this.state.country);
    }

    componentDidMount(){
        // Called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps){
        // Called when the props provided to the component are changed
    }

    componentWillUpdate(nextProps, nextState){
        // Called when the props and/or state change
    }

    componentWillUnmount(){
        // Called when the component is removed
    }

    updateSearch(){
        //console.log("update search got hit and this.refs.query val = " + this.refs.query.valueOf());
        this.state.travelRadius = this.refs.travelDistanceInput.value;

          var address = "http://api.slippymap.com/rest?&xml_request=" + encodeURIComponent("<request> " +
                    "<appkey>7D3183D8-683E-11E3-A044-AF8B407E493E</appkey> " +
                    "<formdata id='locatorsearch'> " +
                    "<geolocs> " +
                    "<geoloc> " +
                    "<addressline>" + (this.refs.query.value != "" ? this.refs.query.value : "8675309") + "</addressline>" +
                    "<country>" + this.props.country + "</country> " +
                    "</geoloc> " +
                    "</geolocs> " +
                    "<searchradius>" + this.state.travelRadius + "</searchradius> " +
                    "</formdata> " +
                    "</request>"
                );


            this.search(address);
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
        console.log("changing page from: "+this.props.viewing + " to: "+nav)

        PagesActions.UpdateDisplayed(nav);
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


        var nav = this.navigation();
        console.log("view in locator "+this.props.viewing);
        var Clicked =false;

        var locKey = 0;

        var locations= _.map(this.state.locations, (location) => {
                locKey++;
            var tempHolder =


                   // (this.state.showDiscription && locKey == this.state.locKey) ?
                        <div key={locKey} >
                            <LocationItem
                                location={location}

                            />
                            <p/>
                        </div>
                    // :
                    //     <div key={locKey} onClick={ ()=> this.clickedLocation.bind(true,locKey)} class='m-editable-list-location mod-active'>
                    //         <div>{location.name}</div>
                    //         {console.log(locKey)}
                    //         <div>{location.address1}</div>
                    //         <div>{location.city}, {location.state}</div>
                    //         <div>{location.postalcode}</div>
                    //         <div>{location.phone}</div>
                    //         <p/>
                    //     </div>;


                return tempHolder;
            })

        return(

    <div class="m-sidebar anim-bar-left">
        <div class="m-button shadow-hover-3 shadow-active-4 m-button-toggle" onClick={()=> this.pageChange()}>View {nav}</div>
        <div class="m-input">
            <input ref="query" onChange={ (e) => { this.updateSearch();}} type="text" required class="m-input-field" />
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

        <div class="m-editable-list mod-appointments shadow-2 mod-closed">
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



    search(query = "") {
        var request = require('superagent');
        var xml2jsParser = require('superagent-xml2jsparser');
        var parser = new xml2js.Parser();
        var dataFromJson = null;
        console.log(query);
        query = query != "" ? query : "https://localhost";
        if(query != "") {
            request
                .get(query)
                .accept('text/xml')
                .parse(xml2jsParser) // add the parser function
                .then((res) => {

                    var xml = res.text;

                    var myXML = parser.parseString(xml, function (err, result) {
                        //Extract the value from the data element
                        try {
                            dataFromJson = require('util').inspect(result.response.collection[0].poi, {
                                showHidden: false,
                                depth: null
                            });
                        } catch (exc)
                        {
                            if (result != null
                                && result.response != null
                                && result.response.message != null
                                && result.response.message[0] != null
                                && result.response.message[0].text != null
                                && result.response.message[0].text[0] != null
                            )
                            {
                                console.log(result.response.message[0].text[0]);
                            }
                        }

                        dataFromJson = eval(dataFromJson);
                    });

                    this.setState({locations: dataFromJson});

                })
        }
        else{
            this.setState({locations: []});
        }
    }

}