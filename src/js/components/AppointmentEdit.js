import React from "react";


export default class AppointmentEdit extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showReschedule:false,
      showCancel: false
    };
  }

  setTime(){

  }

  setDate(){

  }

  cancelAppointment(){
      this.setState({
        showCancel:true
      });
  }

  render() {

    var rescBtnCSS = { 
      background: '#e21836',
      width:'48%',
      textAlign:'center',
      margin:5,
      //right:-10
    }
    var cancBtnCSS = { 
      background: '#e21836',
      width:'48%',
      textAlign:'center',
      margin:5,
      //left: 10

    }

    var timesLeft = {
        right:30,
        bottom:10
    }

    var appointmentName={

      backgroundColor:'transparent',
      textAlign:'center',
      top:-10,
      fontSize : 22
    }

    var appointmentName2={

      backgroundColor:'transparent',
      textAlign:'left',
      top:-10,
      fontSize : 22

    }
    var btnPanel={

      width:'100%',
      backgroundColor:'white',
      zIndex:1,
      marginLeft:20,
      bottom:0,
      padding:5,
      textAlign:'center'

    }

    var bookingInfo = {

      fontSize: 22

    }

    var appointmentInfo={

      top:100

    }

    var appointmentInfo2={
      marginTop:85,
      marginLeft:20
    }

    var backImg = {
      backgroundImage: this.props.Pic,
    }

    var normalcss = {};
    var priceCss = {
      textAlign: 'right',
      paddingRight:'40',
      marginRight:100,
      fontSize: '18',
      zIndex: 1
    }

    var seatCss = {

        textAlign: 'right',
        paddingRight:'0',
        marginRight:200,
        fontSize: '18',
        zIndex: 1
    }

    var priceInfo={
        marginTop:'-230',
        marginLeft:'-140'
    }

    var calendarCss ={

      marginLeft:430,
      marginTop:-135

    }

    var timesCss={
      marginLeft:740,
      marginTop: -210,
      width:400,
      height: 400
    }

    var rescheduleCss={
      height:244,
      width:'100%'
    }

    var leftSet = {
      marginLeft : '95%',

      //content : '',
      //transform : translateZ(0);

      backgroundImage : 'none !important'
      //background-repeat : no-repeat;
      //background-size : contain;

    }

    var classNames = require('classnames');
    var showDiscription = classNames(
         'm-tile anim-tile-in',
        {
            'mod-details':true,
            'mod-times': true,
            'mod-booking': true
        });

    var redTxt = { color:"red"}

    var reschedule = this.state.showReschedule;
    var cancel = this.state.showCancel;


    if(!reschedule){
      return(
        <div class="m-tile m-appointment anim-tile-in" >
            
              <div class="appointment-image"></div>
                            
              <div class="appointment-occurrence">
              <div class="appointment-location-name" style={appointmentName}>{"Class Name Here"}</div>
                <div class="appointment-location-name">{'Store Location Name'}</div>
                <div class="appointment-address">240 Broadway,
                  New York, NY 10007</div>

                <div class="appointment-time" style={redTxt}>January 3rd at 12:30pm</div>
                

              </div>
              <div class="appointment-details">
                <div class="attendee-details">
                  <div class="attendee-name" style={bookingInfo}>BOOKING FIELDS</div>
                  <div class="attendee-name">{4} Seats</div>
            
                  <div class="attendee-name">Attending</div>
                  <div class="attendee-email">Damion McCoy</div>
                  <div class="attendee-email">Sean Penn</div>
                </div>
                

              </div>
              <div style={btnPanel}>
              <span class="m-button shadow-hover-2 shadow-active-3" style={cancBtnCSS} onClick={()=>this.cancelAppointment()}>{!this.state.showCancel? "Cancel":"Confirm Cancel"}</span>
              <span class="m-button shadow-hover-2 shadow-active-3" style={rescBtnCSS} onClick={()=>this.setState({showReschedule: true})}>Reschedule</span>
              </div>  
              </div>

        );
    }
    else{
    return (

<div class={showDiscription} style={rescheduleCss} >
            <div class="m-service-row">
                <div class="m-button-simple shadow-hover-2 shadow-active-3 mod-clear-appointment" onClick={()=>this.setState({showReschedule: false})}>X</div>

                
              <div class="appointment-occurrence" style={appointmentInfo2}>
              <div class="appointment-location-name" style={appointmentName2}>{"Class Name Here"}</div>
                <div class="appointment-location-name">{'Store Location Name'}</div>
                <div class="appointment-address">240 Broadway,
                  New York, NY 10007</div>
                  </div>
                    
                    <div class="calendar" style={calendarCss}>
                        <div class="calendar-header">
                            <div ontouchstart="" class="calendar-header-arrow"></div>
                            <div class="calendar-header-title">May</div>
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
                    <div class="m-tag mod-available-times" style={timesCss}>
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
                  <div style={priceInfo}> 
                        <div style={priceCss}>Available Seats</div> 
                        <div style={seatCss}>{4}</div>
                    </div>
            </div>
      
            );
    }
            
                

  }


}
