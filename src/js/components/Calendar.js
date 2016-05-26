import React from "react";
import CalendarDate from "../components/CalendarDate";

export default class Calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected:false,
            day:1,
            month: 1,
            year: 2016
        };
  }

  render() {



    return (
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
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='1'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='2'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='3'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='4'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='5'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='6'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='7'/></div>
                        </div>
                        <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='8'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='9'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='10'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='11'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='12'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='13'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='14'/></div>
                        </div>
                        <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='15'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='16'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='17'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='18'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='19'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='20'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='21'/></div>
                        </div>
                        <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='22'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='23'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='24'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='25'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='26'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='27'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='28'/></div>
                        </div>
                        <div class="calendar-labels">
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='29'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='30'/></div>
                            <div ontouchstart="" class="calendar-dates-day shadow-hover-1 shadow-active-2"> <CalendarDate date='31'/></div>
                        </div>
                        </div>

    );
  }
}
