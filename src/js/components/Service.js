import React from "react";
import * as PagesActions from "../actions/PagesActions";
import StoresContainer from "./StoresContainer";
import * as BookingActions from "../actions/BookingActions";
import BookingStore from "../stores/BookingStore";
import Calendar from "../components/Calendar";
import * as LocatorActions from "../actions/LocatorActions";

export default class Service extends React.Component {

    //Class Constructor
    //Optional Props:
    //Description: When used this will be the discription used on the page. If not used the default state will be used.
    //Title: When used this will be the discription used on the page. If not used the default state will be used.
    constructor(props){
        super(props);
        this.state = {
            showDescription:false,
            showTimes:false,
            showBooking:false,
            location: BookingStore.getSelectedLoc(),
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            name: "",
            id: "",
            date: "",
            time: "",
            locationAddr: "",
            locationCity: "",
            locationState: "",
            postalcode: "",
            isLocationLocked:false
        };
    }

    componentDidMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.serviceInit();
        console.log("Component mounted location is set to: " +this.state.location);

        BookingStore.on("change", ()=>{
            this.setState({

            date: BookingStore.getSelectedDate(),
            location:BookingStore.getSelectedLoc()
        });

      });
    }

    componentWillUnmount(){
        BookingStore.removeChangeListener= this._onChange;

    }

    serviceInit(){

            if(this.props.description != null || this.drops.Description != " ") {
                this.setState({description: this.props.description});
            }

            if(this.props.title != null || this.props.title != " ") {
                this.setState({title: this.props.title});
            }
    }

    setPage(){
        PagesActions.updateDisplayed("Booking");
    }

    setMargin(){

        var margins;

        switch(this.props.headline){

            case "Class 1":
            case "Class 4":
            case "Class 7":
                margins = 10;
            break;

            case "Class 2":
            case "Class 5":
            case "Class 8":
                margins = -345;
            //margins = "-294px";
            break;

            case "Class 3":
            case "Class 6":
            case "Class 9":
                margins = -700;
            break;

            default:
                margins = -345
            break;

        }

        return margins;
    }

    closeWindow(){

        if(this.state.showDescription){

            this.setState({
                showDescription:false,
                showTimes:false,
                showBooking:false
            });
        }
        else{

            this.setState({ showDescription: true});

        }
    }

    setDate(date){
        this.setState({
            date:date
        })
    }

    setName(name){

    }

    setId(id){

    }

    setLocation(){
        this.setState({
            location:loc
        })
    }

    setTime(time){
        this.setState({time:time });
        BookingActions.selectTime(time);
    }

    updateFirstName(){
        this.setState({firstName:this.refs.fName.value});
    }

    updateLastName(){

        this.setState({lastName:this.refs.lName.value});
    }

    updatePhone(){
        this.setState({phone:this.refs.phone.value});
    }

    updateEmail(){
        this.setState({email:this.refs.email.value});
    }

    bookDate(){
        this.setState({location: BookingStore.getSelectedLoc()});
        var myLocation = this.state.location.location;
        
        if (typeof myLocation != 'undefined') {
            console.log("location > " + myLocation['name'] + " " + myLocation['address1'] + " " + myLocation['state']);
            this.setState({
                locationAddr : myLocation['address1'],
                locationCity : myLocation['city'],
                locationState : myLocation['state'],
                postalcode : myLocation['postalcode']
            });
        }
        this.setState({isLocationLocked:true});
        LocatorActions.setLocationLock(true);

        this.setState({ showBooking: !this.state.showBooking});
    }

    bookService(){
        console.log("Set booked date and time " + this.state.date +" at "+this.state.time + " Name" + this.state.firstName + 
            " " + this.state.lastName + " email: " + this.state.email + " phone: "+ this.state.phone)
        this.setState({isLocationLocked:true});
        LocatorActions.setLocationLock(true);
        BookingActions.selectService(this.state.location.location,this.state.date,this.state.time,null,this.state.firstName,this.state.lastName,this.state.phone,this.state.email,this.props.title) 

        this.setPage();
    }

    render() {
        var backImg = {
            backgroundImage: this.props.pic,
        }

        var normalcss = {};
        var priceCss = {
            textAlign: 'center',
            paddingRight:40,
            fontSize: 18,
            zIndex: 0,
            //width:'calc(100%/4)'

        }
        var seatCss = {

            textAlign: 'center',
            paddingRight:0,
            fontSize: 18,
            zIndex: 0,
           // width:'calc(100%/4)'
        }

        var locCSS={
            height:220,
            //width:280,
            overflowX : 'hidden',
            overflowY : 'scroll',
            width:'calc(100%/4 -20)'
        }

        var calendarCSS={

            marginLeft:283,
            marginTop:-220,
            width:'calc(100%/4 -20)'
        }

        var timesBtn = {

            marginLeft: 70,
            marginTop: 87
        }

        var priceInfo={
            marginTop:-450,
            marginLeft:795,
            width:'calc(100%/4)',
            position:'absolute',
            display : 'block'
        }


        var timesLeft = {
            overflowX : 'hidden',
            //overflowY : 'scroll',
            marginLeft:535,
            bottom:237
        }
        var leftSet = {
            marginLeft: this.setMargin(),
        }

      

      var classNames = require('classnames');
      var showDescription = classNames(
          'm-service m-tile anim-tile-in',
          {
              'mod-details': this.state.showDescription,
              'mod-times': this.state.showTimes,
              'mod-booking': this.state.showBooking
          });

      if (this.state.showDescription){
                return (

        <div class={showDescription} style={ this.state.showTimes? leftSet : normalcss} >
            <div class="m-title-image-event" style={backImg}></div>
                <div class="m-service-description">

                <div class="m-service-description-header" >{this.props.title}</div>

                <div class="m-button shadow-hover-2 shadow-active-3 m-button-more-info" onClick={ ()=> this.closeWindow()}>{this.state.showDescription? "X":"More Info"}</div>
                
                <div class="m-service-description-text" >{this.props.description}</div>

                <div class="m-service-time">
                
                    <div class="m-tag" style={locCSS}>
                        <div class="m-tag-header" >Select A Location</div>
                           <StoresContainer />
                        
                    </div>
                    <div style={calendarCSS}>
                            <Calendar/>
                    </div>
                    <div class="m-tag mod-available-times" style={timesLeft}>
                        <div class="m-tag-header">Select A Time</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('8:00am')}>8:00am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('8:30am')}>8:30am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('9:00am')}>9:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('10:00am')}>10:00am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('10:30am')}>10:30am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('11:20am')}>11:20am</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('1:00pm')}>1:00pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('1:30pm')}>1:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('2:30pm')}>2:30pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('3:00pm')}>3:00pm</div>
                        <div class="m-button shadow-hover-1 shadow-active-2"onClick={ ()=> this.setTime('3:30pm')}>3:30pm</div>
                    </div>
                    <div style={priceInfo}> 
                        <div style={priceCss}>Price: ${this.props.price}</div> 
                        <div style={seatCss}>Available Seats: {this.props.seats}</div>
                        <div class="m-button shadow-hover-2 shadow-active-3" style={timesBtn} onClick={ ()=> this.bookDate()}>SELECT TIME</div>
                    </div>

                     
                </div>
                <div class="m-service-booking">
                    <div class="m-service-booking-form">
                        <div class="m-input">
                            <input type="text" ref="fName" required class="m-input-field" onChange={ (e) => { this.updateFirstName();}}/>
                            <label class="m-input-label">First Name</label>
                        </div>
                        <div class="m-input">
                            <input type="text" ref="lName" required class="m-input-field" onChange={ (e) => { this.updateLastName();}}/>
                            <label class="m-input-label">Last Name</label>
                        </div>
                        <div class="m-input">
                            <input type="text" ref="phone" required class="m-input-field" onChange={ (e) => { this.updatePhone();}}/>
                            <label class="m-input-label">Phone Number</label>
                        </div>
                        <div class="m-input">
                            <input type="text" ref="email" required class="m-input-field" onChange={ (e) => { this.updateEmail();}}/>
                            <label class="m-input-label">Email</label>
                        </div>
                    </div>
                    <div class="m-appointment-description">
                        <div class="title">{this.props.title != null ? this.props.title : " "}</div>
                        <div class="address">{this.state.locationAddr},</div>
                        <div class="address">{this.state.locationCity}, {this.state.locationState} {this.state.postalcode} </div>
                        <div class="dateTime">May {this.state.date} at {this.state.time}</div>
                        <div class="m-button shadow-hover-2 shadow-active-3 m-button-date" onClick={()=>this.setState({showBooking:false})}>Change Date/Time</div>
                        <div class="m-button shadow-hover-2 shadow-active-3 m-button-book" onClick={ ()=> this.bookService()}> Book Now </div>
                    </div>
                </div>

                <div class="m-button shadow-hover-2 shadow-active-3 m-button-times" onClick={ ()=> this.setState({ showTimes: !this.state.showTimes })}>Get Times</div>
            </div>
            <div></div>

        </div>
    );

      } else {
            return (

        <div class={showDescription} >
            <div class="m-service-row">
                <div class="m-title-image-event" style={backImg}></div>
                    <div class="m-service-description">
                    <div class="m-service-description-header" >{this.props.title}</div>
                    <div class="m-button shadow-hover-2 shadow-active-3 m-button-more-info" onClick={ ()=> this.closeWindow()}>{this.state.showDescription? "X":"More Info"}</div>
                    <div class="m-service-description-text" >{this.props.Description}</div>
                </div>

            </div>
        </div>
    );

      }
  }
}
