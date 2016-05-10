import React from "react";
import { Panel,Grid,Col,Row,ResponsiveEmbed,Button,Jumbotron,Image,Well} from 'react-bootstrap';

import * as PagesActions from "../actions/PagesActions"
import StoresContainer from "./StoresContainer"
import * as BookingActions from "../actions/BookingActions"
import BookingStore from "../stores/BookingStore"


import ServiceStore from "../stores/ServiceStore";
import * as ServiceActions from "../actions/ServiceActions";

export default class Service extends React.Component {

    //Class Constructor
    //Optional Props:
    //Description: When used this will be the discription used on the page. If not used the default state will be used.
    //Title: When used this will be the discription used on the page. If not used the default state will be used.
    constructor(props){
        super(props);
        this.state = {
            showDiscription:false,
            showTimes:false,
            showBooking:false,
            location: null,
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            name: "",
            id: "",
            date: "",
            time: "",
        };
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.serviceInit();
        // var locs = LocatorStore.getAll();
        // console.log(">>>Selected locations:" + locs);

        // for(var i =0;i < locs.length; i++){
        //     console.log(">>>" + locs[i].id + "-" + locs[i].location + locs[i].selected);
        
        // }
    }





    serviceInit(){

            if(this.props.Description != null || this.props.Description != " ") {
                this.setState({Description: this.props.Description});
            }

            if(this.props.Title != null || this.props.Title != " ") {
                this.setState({Title: this.props.Title});
            }
    }

    setPage(){
        PagesActions.UpdateDisplayed("Booking");
    }

    setMargin(){

        var margins;

        switch(this.props.Headline){

            case "Class 1":
            margins = "10px";
            break;
            case "Class 2":
            margins = "-345px";
            //margins = "-294px";
            break;
            case "Class 3":
            margins = "-700px";
            break;
            case "Class 4":
            margins = "10px";
            break;
            case "Class 5":
            //margins = "-294px";
            margins = "-345px";
            break;
            case "Class 6":
            margins = "-700px";
            break;
            case "Class 7":
            margins = "10px";
            break;
            case "Class 8":
            //margins = "-294px";
            margins = "-345px";
            break;
            default:
            margins = "-345px"
            break;



        }

        console.log(margins);
            return margins;
    }

    closeWindow(){

        if(this.state.showDiscription){

            this.setState({
                showDiscription:false,
                showTimes:false,
                showBooking:false
            });
        }
        else{

            this.setState({ showDiscription: true});

        }
    }

    setDate(date){
        this.setState({
            date:date
        })

        console.log("Selected Date "+ date)
    }

    setName(name){

    }

    setId(id){


    }

    setLocation(loc){

    }

    setTime(time){

        console.log("Selected Date "+ date);
        this.setState({ showBooking: !this.state.showBooking, time:time });
    }

    bookService(){

        
    }

    render() {
      var BackImg = {
          backgroundImage: this.props.Pic,
      }

        var normalcss = {};

      var timesLeft = {
        left:100
      }
      var LeftSet = {
            marginLeft: this.setMargin(),
      }
      var classNames = require('classnames');
      var showDiscription = classNames(
          'm-service m-tile anim-tile-in',
          {
              'mod-details': this.state.showDiscription,
              'mod-times': this.state.showTimes,
              'mod-booking': this.state.showBooking
          });

      if (this.state.showDiscription){
                return (

        <div class={showDiscription} style={ this.state.showTimes? LeftSet : normalcss} >
            <div class="m-title-image-event" style={BackImg}></div>
                <div class="m-service-description">
                <div class="m-service-description-header" >{this.props.Title}</div>
                <div class="m-button shadow-hover-2 shadow-active-3 m-button-more-info" onClick={ ()=> this.closeWindow()}>{this.state.showDiscription? "X":"More Info"}</div>
                <div class="m-service-description-text" >{this.props.Description}</div>
                <div class="m-service-time">
                    <div class="m-tag">
                        <div class="m-tag-header">Select A Location</div>
                        <StoresContainer />
                        
                    </div>
                    <div class="calendar">
                        <div class="calendar-header">
                            <div ontouchstart="" class="calendar-header-arrow"></div>
                            <div class="calendar-header-title"> MAY </div>
                            <div ontouchstart="" class="calendar-header-arrow"></div>
                        </div>
                        <div class="calendar-labels">
                            <div class="calendar-labels-label">SU</div>
                            <div class="calendar-labels-label">M</div>
                            <div class="calendar-labels-label">TU</div>
                            <div class="calendar-labels-label">W</div>
                            <div class="calendar-labels-label">TH</div>
                            <div class="calendar-labels-label">F</div>
                            <div class="calendar-labels-label">SA</div>
                        </div>
                        <div class="calendar-labels">


                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 1 2016')}>1</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 2 2016')}>2</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 3 2016')}> 3</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 4 2016')}>4</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 5 2016')}>5</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 6 2016')}>6</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 7 2016')}>7</div>
                            </div>
                            <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 8 2016')}>8</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 9 2016')}>9</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 10 2016')}>10</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 11 2016')}>11</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 12 2016')}>12</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 13 2016')}>13</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 14 2016')}>14</div>
                            </div>
                            <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 15 2016')}>15</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 16 2016')}>16</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 17 2016')}>17</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 18 2016')}>18</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 19 2016')}>19</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 20 2016')}>20</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 21 2016')}>21</div>
                            </div>
                            <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 22 2016')}>22</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 23 2016')}>23</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 24 2016')}>24</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 25 2016')}>25</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 26 2016')}>26</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 27 2016')}>27</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 28 2016')}>28</div>
                            </div>
                            <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 29 2016')}>29</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 30 2016')}>30</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2" onClick={ ()=> this.setDate('MAY 31 2016')}>31</div>
                        </div>
                    </div>
                    <div class="m-tag mod-available-times" style={timesLeft}>
                        <div class="m-tag-header">Select A Time</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('8:00am')}>8:00am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('8:30am')}>8:30am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('9:00am')}>9:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('9:20am')}>9:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('10:00am')}>10:00am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('10:30am')}>10:30am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('11:20am')}>11:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('1:00pm')}>1:00pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('1:30pm')}>1:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('2:30pm')}>2:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('3:00pm')}>3:00pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('3:30pm')}>3:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('4:30pm')}>4:30pm</div>
                    </div>
                </div>
                <div class="m-service-booking">
                    <div class="m-service-booking-form">
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">First Name</label>
                        </div>
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Last Name</label>
                        </div>
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Phone Number</label>
                        </div>
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Email</label>
                        </div>
                    </div>
                    <div class="m-appointment-description">
                        <div class="title">Papercraft Ninjas</div>
                        <div class="address">600 madison avenue,</div>
                        <div class="address">New York, New York 10007</div>
                        <div class="dateTime">December 14th at 2:30pm</div>
                        <div class="m-button shadow-hover-2 shadow-active-3 m-button-date">Change Date/Time</div>
                        <div class="m-button shadow-hover-2 shadow-active-3 m-button-book" onClick={ ()=> this.setPage()}> Book Now </div>
                    </div>
                </div>
                <div class="m-button shadow-hover-2 shadow-active-3 m-button-times" onClick={ ()=> this.setState({ showTimes: !this.state.showTimes })}>Get Times</div>
            </div>
        </div>

    );

      } else {
            return (

        <div class={showDiscription} >
            <div class="m-service-row">
            <div class="m-title-image-event" style={BackImg}></div>
                <div class="m-service-description">
                <div class="m-service-description-header" >{this.props.Title}</div>
                <div class="m-button shadow-hover-2 shadow-active-3 m-button-more-info" onClick={ ()=> this.closeWindow()}>{this.state.showDiscription? "X":"More Info"}</div>
                <div class="m-service-description-text" >{this.props.Description}</div>
                <div class="m-service-time">
                    <div class="m-tag">
                        <div class="m-tag-header">Select A Location</div>
                        <StoresContainer />
                        
                    </div>
                    <div class="calendar">
                        <div class="calendar-header">
                            <div ontouchstart="" class="calendar-header-arrow"></div>
                            <div class="calendar-header-title">Fake Month and Date</div>
                            <div ontouchstart="" class="calendar-header-arrow"></div>
                        </div>
                        <div class="calendar-labels">
                            <div class="calendar-labels-label">SU</div>
                            <div class="calendar-labels-label">M</div>
                            <div class="calendar-labels-label">TU</div>
                            <div class="calendar-labels-label">W</div>
                            <div class="calendar-labels-label">TH</div>
                            <div class="calendar-labels-label">F</div>
                            <div class="calendar-labels-label">SA</div>
                        </div>
                        <div class="calendar-dates">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">1</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">2</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">3</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">4</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">5</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">6</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">7</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">8</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">9</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">10</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">11</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">12</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">13</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">14</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">15</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">16</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">17</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">18</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">19</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">20</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">21</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">22</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">23</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">24</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">25</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">26</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">27</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">28</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">29</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">30</div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2">31</div>
                        </div>
                    </div>
                    <div class="m-tag mod-available-times">
                        <div class="m-tag-header">Select A Time</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>8:00am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>8:30am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>9:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>10:00am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>10:30am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>11:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>1:00pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>1:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>2:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>3:00pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>3:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setState({ showBooking: !this.state.showBooking })}>4:30pm</div>
                    </div>
                </div>
                <div class="m-service-booking">
                    <div class="m-service-booking-form">
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">First Name</label>
                        </div>
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Last Name</label>
                        </div>
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Phone Number</label>
                        </div>
                        <div class="m-input">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Email</label>
                        </div>
                    </div>
                    <div class="m-appointment-description">
                        <div class="title">Papercraft Ninjas</div>
                        <div class="address">600 madison avenue,</div>
                        <div class="address">New York, New York 10007</div>
                        <div class="dateTime">December 14th at 2:30pm</div>
                        <div class="m-button shadow-hover-2 shadow-active-3 m-button-date">Change Date/Time</div>
                        <div class="m-button shadow-hover-2 shadow-active-3 m-button-book" onClick={ ()=> this.setPage()}> Book Now </div>
                    </div>
                </div>
                <div class="m-button shadow-hover-2 shadow-active-3 m-button-times" onClick={ ()=> this.setState({ showTimes: !this.state.showTimes })}>Get Times</div>
            </div>
        </div>
        </div>

    );

      }
  }
}
