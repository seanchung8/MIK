/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";

//Action to change which components are displayed on the main page
export function UpdateDisplayed(view,catagory="") {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY",
        text: view,
        catagory: catagory

    });

}

//Action to select a catagory to display services for
export function SelectCatagory(catagory){
    dispatcher.dispatch({
        type: "SELECT_CATAGORY",
        text: catagory
    });
}

