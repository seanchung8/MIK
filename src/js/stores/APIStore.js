/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class ServiceTypeStore extends EventEmitter{

    constructor(){

        super()
        this.serviceType = []


    }




    getAll(){
        return this.serviceType;
    }

    getLocation(){

    }

    getServices(){

    }

    getEvents(){

    }

    MakeLocationCall(address,Country){

    }

    MakeServiceCall(serviceName,location=null){

    }

    MakeEventCall(event,location){

    }


    handleActions(action){
        console.log("*** In APIStore::handleActions received an action",action);

        switch(action.type){

            case 'GET_LOCATIONS':
            break;
            case 'GET_SERVICES':
            break;
            case 'GET_EVENTS'

        }

    }

}

const serviceTypeStore = new ServiceTypeStore;
dispatcher.register(serviceTypeStore.handleActions.bind(serviceTypeStore));
window.ServiceTypeStore = serviceTypeStore;
window.dispatcher = dispatcher;
export default serviceTypeStore;