/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function UpdateDisplayed(view) {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY",
        text: view

    })
}