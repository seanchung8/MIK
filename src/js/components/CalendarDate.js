import React from "react";
import BookingStore from "../stores/BookingStore"
import * as BookingActions from "../actions/BookingActions"

export default class CalendarDate extends React.Component {


  constructor(props){
        super(props);
        this.state = {
            selected:false,
            day:this.props.date,
            month: 1,
            year: 2016
        };
  }

    componentDidMount() {
    //console.log("in LocationButton.componentDidMount() name:" + this.state.name);

    BookingStore.on("change", ()=>{
      var myStatus = BookingStore.isSelectedDate(this.state.day);
      this.setState({selected: myStatus});
      });
  }

  setDate(){

      BookingActions.SelectDate("May " +this.state.day+" 2016")
      console.log("Setting Date button for day "+this.state.day)  
  }

  render() {

    return (
        <div onClick={ ()=> this.setDate()}>{this.state.day}</div>
    );
  }
}
