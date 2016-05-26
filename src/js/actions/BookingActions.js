/**
 * Created by Damion on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function selectService(loc,date,time,id,firstName,lastName,phone,email,servName) {
    dispatcher.dispatch({
        type: "SELECT_SERVICE",
        location:loc,
        date:date,
        time:time,
        id: id,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        name: servName
    })
}

export function removeService(id) {
    dispatcher.dispatch({
    	type: "REMOVE_SERVICE",
        id:id
    })
}

export function selectDate(date) {
    dispatcher.dispatch({
        type: "SELECTED_DATE",
        date:date
    })
}

export function selectTime(time) {
    dispatcher.dispatch({
        type: "SELECTED_TIME",
        time:time
    })
}