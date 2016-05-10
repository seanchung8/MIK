/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function SelectLocation(location,selected,id) {
	console.log(">> in LocationActions.SelectLocation:" + location);
    dispatcher.dispatch({
        type: "SELECT_LOCATION",
        text: location,
        isSelected: selected,
        id: id
    })
}

export function SelectedLocation(location,select) {
	console.log(">> in LocationActions.SelectLocation:" + location);
    dispatcher.dispatch({
        type: "SELECTED_LOC",
        location: location,
        selected: select
        
    })
}