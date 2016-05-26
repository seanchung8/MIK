/**
 * Created by Damion on 2016-04-25.
 */
import dispatcher from "../dispatcher";

//Action to change which components are displayed on the main page
export function updateDisplayed(view,category="") {
    dispatcher.dispatch({
        type: "CHANGE_DISPLAY",
        text: view,
        category: category

    });

}

//Action to select a category to display services for
export function selectCategory(category){
    dispatcher.dispatch({
        type: "SELECT_CATEGORY",
        text: category
    });
}

