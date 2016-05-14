/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function SelectService(loc,date,time,id,firstName,lastName,phone,email,servName) {
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

export function RemoveService(id) {
    dispatcher.dispatch({
    	type: "REMOVE_SERVICE",
        id:id
    })
}