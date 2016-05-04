/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class PagesStore extends EventEmitter{

    constructor(props){

        super(props)
        this.viewing = "Landing",
        this.selectedCatagory = ""
    }



    changePage(text){
        console.log("*** in PagesStore.changePage(" + text + ")");
        this.viewing = text;
        console.log("Sending change to page " + text);
        this.emit("change");
    }

    getAll(){
        return this.viewing;
    }

    getSelectedCatagory(){
        return this.selectedCatagory;
    }
    
    getViewing()
    {
        return this.viewing;
    }

    handleActions(action){
        console.log("PagesStore received an action",action);

        switch (action.type){
            case "CHANGE_DISPLAY":
                this.changePage(action.text);
                this.selectedCatagory="";
                break;
            case "SELECT_CATAGORY":
                this.selectedCatagory = action.text;
                //console.log("Sending change to page for SELECT_CATAGORY " + action.text);
                this.changePage('CategoryClasses');
                break;
        }

    }

}

const pagesStore = new PagesStore();
dispatcher.register(pagesStore.handleActions.bind(pagesStore));
window.PagesStore = pagesStore;
window.dispatcher = dispatcher;
export default pagesStore;