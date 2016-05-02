/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function fetchLocations(view) {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY",
        text: view

    })
}

export function fetchServices(view) {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY",
        text: view

    })
}

export function fetchEvents(view) {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY",
        text: view

    })
}