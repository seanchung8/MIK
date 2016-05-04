/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

// class ServiceTypeStore extends EventEmitter{

//     constructor(){

//         super()
//         this.serviceType = []


//     }




//     getAll(){
//         return this.serviceType;
//     }


//     handleActions(action){
//         console.log("ServiceTypeStore received an action",action);

//     }

// }

// const serviceTypeStore = new ServiceTypeStore;
// dispatcher.register(serviceTypeStore.handleActions.bind(serviceTypeStore));
// window.ServiceTypeStore = serviceTypeStore;
// window.dispatcher = dispatcher;
// export default serviceTypeStore;
class CategoryStore extends EventEmitter{

    constructor(){

        super()
        this.serviceType = []


    }




    getAll(){
        return this.serviceType;
    }


    handleActions(action){
        console.log("*** CategoryStore received an action",action);

    }

}


const categoryStore = new CategoryStore;
dispatcher.register(categoryStore.handleActions.bind(categoryStore));
window.CategoryStore = categoryStore;
window.dispatcher = dispatcher;
export default categoryStore;

