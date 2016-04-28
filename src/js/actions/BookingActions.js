/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export function ChangeDisplayed() {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY"
    })
}