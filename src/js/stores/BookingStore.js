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
        this.selectedDate ="";
        this.firstName = "";
        this.lastName = "";
        this.email ="";
        this.phone ="";
        this.selectedService ="";

    }

    getSelectedDate(){
        return this.selectedDate;
    }

    getSelectedTime(){
        return this.selectedTime;
    }

    getSelectedLoc(){
        return this.selectedLocation;
    }

    getSelectedFirstName(){
        return this.firstName;
    }

    getSelectedLastName(){
        return this.lastName;
    }

    getSelectedEmail(){
        return this.email;
    }
    
    getSelectedPhone(){
        return this.phone;
    }
        
    getSelectedService(){
        return this.selectedService;
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

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;

        this.emit("change");
    }

    isSelectedLocation(locName){
        var myName = this.selectedLocation.location.name;
        if(locName == myName){
            return true;
        }
        else{
            return false;
        }
    }

    isSelectedTime(time){
        var myTime = this.selectedTime;
        if(time == myTime){
            return true;
        }
        else{
            return false;
        }
    }

    isSelectedDate(date){
        var myDate = this.selectedDate;
        if(date == myDate){
            return true;
        }
        else{
            return false;
        }
    }



    handleActions(action){

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
                this.selectedDate = action.date;
                this.emit("change");
                break;

            case "SELECTED_TIME":
                this.selectedTime = action.time;
                this.emit("change");
                break;
        }
    }

}

const bookingStore = new BookingStore;
dispatcher.register(bookingStore.handleActions.bind(bookingStore));
export default bookingStore;