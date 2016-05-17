/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class BookingStore extends EventEmitter{

    constructor() {

        super()
        this.booked = []
        this.selectedLocation ={ };
        this.selectedTime = "";
        this.selectedDate

    }


    getAll() {
        return this.booked;
    }

    removeService(id) {

        
        for(var i =0;i < this.booked.length;i++){

            if(this.booked[i].id == id){
                this.booked[i].pop;
                break;
            }
        }
        this.emit("change");
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
        this.emit("change");
    }

    isSelectedLocation(locName){
        //console.log("+++locName:" + JSON.stringify(this.selectedLocation));
        var myName = this.selectedLocation.location.name;
        if(locName == myName){
            console.log('this is the right location ' + locName + " == "+ myName)
            return true;
        }
        else{
            console.log('this is NOT the right location ' + locName  + " != "+ myName)
            return false;
        }
    }

        isSelectedTime(time){
        //console.log("+++locName:" + JSON.stringify(this.selectedLocation));
        var myTime = this.selectedTime;
        if(time == myTime){
            console.log('this is the right location ' + time + " == "+ myTime)
            return true;
        }
        else{
            console.log('this is NOT the right location ' + time  + " != "+ myTime)
            return false;
        }
    }

        isSelectedDate(date){
        //console.log("+++locName:" + JSON.stringify(this.selectedLocation));
        var myDate = this.selectedDate;
        if(date == myDate){
            console.log('this is the right location ' + date + " == "+ myDate)
            return true;
        }
        else{
            console.log('this is NOT the right location ' + date  + " != "+ myDate)
            return false;
        }
    }

    getSelectedLoc(){
        return this.location;
    }

    handleActions(action){
        console.log("BookingStore received an action",action);

        switch(action.type){
            case "SELECT_SERVICE":
                this.bookService(action.location,action.date,action.time,action.id,action.firstName,action.lastName,action.phone,action.email,action.name);
                break;

            case "REMOVE_SERVICE":
                removeService(action.id);
                break;

            case "SELECTED_LOCATION":
                this.selectedLocation ={ 
                    id: action.location.clientkey,
                    location: action.location,
                    selected: true
                    };
                this.emit("change");
                break;
            case "SELECTED_DATE":
                console.log(action.date);
                this.selectedDate = action.date;
                this.emit("change");
                break;
            case "SELECTED_TIME":
                console.log(action.time);
                this.selectedTime = action.time;
                this.emit("change");
                break;
        }
    }

}

const bookingStore = new BookingStore;
dispatcher.register(bookingStore.handleActions.bind(bookingStore));
export default bookingStore;