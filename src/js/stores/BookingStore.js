/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class BookingStore extends EventEmitter{

    constructor(){

        super()
        this.booked = []


    }




    getAll(){
        return this.booked;
    }

    removeService(id){

        
        for(var i =0;i < this.booked.length;i++){

            if(this.booked[i].id == id){
                this.booked[i].pop;
                break;
            }
        }
    }

    bookService(loc,date,time,id,firstName,lastName,phone,email,name){

        this.booked.push({

        location:loc,
        date:date,
        time:time,
        id: id,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        name: name


        });
    }

    handleActions(action){
        console.log("ServiceTypeStore received an action",action);

        switch(action.type){
            case "SELECT_SERVICE":
                this.bookService(action.location,action.date,action.time,action.id,action.firstName,action.lastName,action.phone,action.email,action.name);
            break;
            case "REMOVE_SERVICE":
                removeService(action.id);
            break;
        }

    }

}

const bookingStore = new BookingStore;
dispatcher.register(bookingStore.handleActions.bind(bookingStore));
export default bookingStore;