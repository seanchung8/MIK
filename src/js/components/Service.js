import React from "react";
import { Panel,Grid,Col,Row,ResponsiveEmbed,Button,Jumbotron,Image,Well} from 'react-bootstrap';






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
            showBooking:false
        };
    }


    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.ServiceTypeInit();
    }

    ServiceTypeInit(){


            if(this.props.Description != null || this.props.Description != " ") {
                this.setState({Description: this.props.Description});
            }

            if(this.props.Title != null || this.props.Title != " ") {
                this.setState({Title: this.props.Title});
            }


    }



  render() {

      var classNames = require('classnames');
      var showDiscription = classNames(
          'm-service m-tile shadow-2 anim-tile-in',
          {
              'mod-details': this.state.showDiscription,
              'mod-times': this.state.showTimes,
              'mod-booking': this.state.showBooking
          });



    return (

        <div class={showDiscription} >
            <div class="m-service-description">
                <div class="m-service-description-header" >Arts And Crafts</div>
                <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 m-button-more-info" onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>{this.state.showDiscription? "X":"More Info"}</div>
                <div class="m-service-description-text" >Sed sagittis in neque laoreet dapibus. Maecenas eget egestas tortor. In massa leo, ullamcorper et lacus vitae, volutpat scelerisque mauris. Donec sollicitudin nisl scelerisque nunc placerat, nec rhoncus lectus maximus. Maecenas sapien libero, cursus in lobortis non, vestibulum sed magna. Curabitur at arcu in mauris suscipit tincidunt eget id ex. Aliquam sodales convallis vehicula. Pellentesque ultrices, ante non fringilla efficitur, mi erat consectetur turpis, et pellentesque odio tellus quis enim. Mauris euismod facilisis lectus eget vulputate. Vivamus et dui nulla. Phasellus a lorem eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Pellentesque volutpat pharetra purus, nec bibendum leo viverra et. Proin dapibus nisl et ultrices suscipit. Phasellus non magna odio. Aliquam nec bibendum diam. Fusce rutrum, justo quis congue maximus, urna nulla ultricies enim, id sollicitudin tellus quam in tellus. Nulla facilisi. Aenean interdum et dolor accumsan finibus. Duis ultricies, sem sit amet sollicitudin convallis, magna diam pulvinar eros, ac euismod metus nibh in nisl. Suspendisse rutrum erat erat, sit amet auctor purus elementum eu. Maecenas eget lorem odio. Vivamus auctor, metus nec lacinia ullamcorper, enim erat tempus nisi, dictum placerat ante felis ac augue. Integer et nulla quis justo vulputate viverra. Ut porta rutrum porta. Proin faucibus ut sapien sit amet efficitur.</div>
                <div class="m-service-time">
                    <div class="m-tag">
                        <div class="m-tag-header">Select A Location</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">255 Broadway</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">600 Madison</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">22-20 23rd</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">280 Broadway</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">255 Broadway</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">600 Madison</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">255 Broadway</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3">600 Madison</div>
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
                        <div class="m-input shadow-1">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">First Name</label>
                        </div>
                        <div class="m-input shadow-1">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Last Name</label>
                        </div>
                        <div class="m-input shadow-1">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Phone Number</label>
                        </div>
                        <div class="m-input shadow-1">
                            <input type="text" required class="m-input-field" />
                            <label class="m-input-label">Email</label>
                        </div>
                    </div>
                    <div class="m-appointment-description">
                        <div class="title">Papercraft Ninjas</div>
                        <div class="address">600 madison avenue,
                            New York, New York 10007</div>
                        <div class="dateTime">December 14th at 2:30pm</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 m-button-date">Change Date/Time</div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 m-button-book"><a href="/booking.html">Book Now</a></div>
                    </div>
                </div>
                <div class="m-button shadow-1 shadow-hover-2 shadow-active-3 m-button-times" onClick={ ()=> this.setState({ showTimes: !this.state.showTimes })}>Get Times</div>
            </div>
        </div>

    );
  }
}