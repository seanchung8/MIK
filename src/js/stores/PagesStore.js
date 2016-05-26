/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class PagesStore extends EventEmitter{

    constructor(props){

        super(props)
        this.viewing = "Landing",
        this.selectedCategory = ""
    }

    changePage(text){
        this.viewing = text;
        this.emit("change");
    }

    getAll(){
        return this.viewing;
    }

    getSelectedCategory(){
        return this.selectedCategory;
    }
    
    getViewing()
    {
        return this.viewing;
    }

    handleActions(action){
        switch (action.type){

            case "CHANGE_DISPLAY":
                this.selectedCategory="";
                this.changePage(action.text);
                break;

            case "SELECT_CATEGORY":
                this.selectedCategory = action.text;
                this.changePage('CategoryClasses');
                break;
        }

    }

}

const pagesStore = new PagesStore();
dispatcher.register(pagesStore.handleActions.bind(pagesStore));

export default pagesStore;