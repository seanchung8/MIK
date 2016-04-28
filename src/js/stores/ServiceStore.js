/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class ServiceStore extends EventEmitter{

    constructor(){

        super()
        this.serviceStore = [

        ]


    }




    getAll(){
        return this.serviceStore;
    }


    handleActions(action){
        console.log("ServiceTypeStore received an action",action);

    }

}

const serviceStore = new ServiceStore;
dispatcher.register(serviceStore.handleActions.bind(serviceStore));
export default serviceStore;