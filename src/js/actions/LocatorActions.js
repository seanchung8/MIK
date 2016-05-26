/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function selectLocation(location,selected,id) {
    dispatcher.dispatch({
        type: "SELECT_LOCATION",
        text: location,
        isSelected: selected,
        id: id
    })
}

export function selectedLocation(location) {
    dispatcher.dispatch({
        type: "SELECTED_LOCATION",
        location: location,

        
    })
}

export function setLocationLock(lock){
    dispatcher.dispatch({
        type: "LOCATION_LOCKED",
        locked:lock
    })
}