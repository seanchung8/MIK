/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class ServiceStore extends EventEmitter{

    constructor(){

        super()

        this.state = {
            row: "",
            col: ""
        }


    }




    getAll(){
        return this.serviceStore;
    }


    handleActions(action){
        console.log("ServiceStore received an action",action);

        switch(action.type){
        }


    }

}

const serviceStore = new ServiceStore;
dispatcher.register(serviceStore.handleActions.bind(serviceStore));
export default serviceStore;