/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function SelectLocation(location,selected) {
    dispatcher.dispatch({
        type: "SELECT_LOCATION",
        text: location,
        isSelected: selected
    })
}