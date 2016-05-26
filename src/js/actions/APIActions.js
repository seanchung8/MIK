/**
 * Created by damion on 2016-04-25.
 */
import dispatcher from "../dispatcher";


//Make API call for services
export function fetchServices(catagory) {
    dispatcher.dispatch({
        type: "GET_SERVICES",
        text: catagory

    })
}
//Make API call for Events
export function fetchEvents(service) {
    dispatcher.dispatch({
        type: "GET_EVENTS",
        text: service

    })
}
//Make API call for store locations
export function fetchStores(zip,radius,countries){
    dispatcher.dispatch({
        type: "SEARCH_STORES",
        zip: zip,
        radius:radius,
        countries:countries
    })

}