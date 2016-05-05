import React from 'react';
import _ from 'lodash';
import xml2js from 'xml2js';
import { Panel,Grid,Col,Row,PanelGroup,ListGroup,ListGroupItem,Well,ButtonToolbar,Button} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import ReactSliderNativeBootstrap from 'react-bootstrap-native-slider';
import LocationItem from './LocationItem';






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
            country: this.props.country
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



          var address = "http://api.slippymap.com/rest?&xml_request=" + encodeURIComponent("<request> " +
                    "<appkey>7D3183D8-683E-11E3-A044-AF8B407E493E</appkey> " +
                    "<formdata id='locatorsearch'> " +
                    "<geolocs> " +
                    "<geoloc> " +
                    "<addressline>" + (this.refs.query.value != "" ? this.refs.query.value : "8675309") + "</addressline>" +
                    "<country>" + this.props.country + "</country> " +
                    "</geoloc> " +
                    "</geolocs> " +
                    "<searchradius>"+ (this.refs.query2.value != "" ? this.refs.query2.value : "25") +"</searchradius> " +
                    "</formdata> " +
                    "</request>"
                );


            this.search(address);
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
//Slider code for range Moved so it could be commented.
// <div class=></div>
// <div class=""></div>


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
        <div class="m-button shadow-2 shadow-hover-3 shadow-active-4 m-button-toggle">View Parties</div>
        <div class="m-input shadow-2">
            <input ref="query" onChange={ (e) => { this.updateSearch();}} type="text" required class="m-input-field" />
            <label class="m-input-label">Address</label>
        </div>
        <div class="m-slider shadow-2">
            <div class="m-slider-label">Max Travel Distance </div>
            <span class="m-slider-label">10 Miles</span>
            <div>
                <input className="m-slider-line m-slider-circle" type="range" max={this.state.max} min={this.state.min} defaultValue="25"/>
            </div>

        </div>
        {condition?
            <div class={"m-editable-list mod-locations shadow-2"}>
                <div onClick={ ()=> this.setState({ open: !this.state.open })} class="m-button">Show Location List</div>

                    <ul >{locations}</ul>

            </div>
            :
            <div class={"m-editable-list mod-locations shadow-2 mod-closed"}>
                <div onClick={ ()=> this.setState({ open: !this.state.open })} class="m-button">Show Location List</div>

            </div>
        }

        <div class="m-tag shadow-2">
            <div class="m-tag-header">Age Group</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Child</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Preteen</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Teenager</div>
            <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">Adult</div>
        </div>
        <div class="m-slider shadow-2">
            <div class="m-slider-label">Max Cost <span>$30</span></div>
            <input className="m-slider-line m-slider-circle m-slider-label" type="range" max={this.state.max1} min={this.state.min1} defaultValue="25"/>
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