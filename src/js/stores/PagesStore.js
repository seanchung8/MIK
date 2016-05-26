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
        this.viewing = text;
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
        switch (action.type){

            case "CHANGE_DISPLAY":
                this.selectedCatagory="";
                this.changePage(action.text);
                break;

            case "SELECT_CATAGORY":
                this.selectedCatagory = action.text;
                this.changePage('CategoryClasses');
                break;
        }

    }

}

const pagesStore = new PagesStore();
dispatcher.register(pagesStore.handleActions.bind(pagesStore));

export default pagesStore;