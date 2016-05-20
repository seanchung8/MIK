import React from "react";
import * as BookingActions from "../actions/BookingActions"
import BookingStore from "../stores/BookingStore"

export default class appointmentDisplay extends React.Component {


      constructor(props){
        super(props);
        this.state = {
          appointments: BookingStore.getAll()
        };
        console.log("checking to see if this is hit")
    }

  render() {
console.log("hit render")
    var appointments = _.map(this.state.appointments, (appointment) => {
                locKey++;
            var tempHolder =

                        <div key={locKey} >
                            <Appointment
                                appointInfo={appointment}

                            />
                        </div>
                        console.log('apointments '+ appointment)
                return tempHolder;
            })

console.log(appointments)

    return (
      <div >
            {appointments}
      </div>
    );
  }
}
