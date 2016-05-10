
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import _ from 'lodash';


class LocatorStore extends EventEmitter{

    constructor(props){

        super(props)
        this.locations = [ ];
        this.selectedLocation = {};
    }

    getAll(){
        return this.locations;
    }


    SelectLocation(location,isSelected,id){

        console.log(">>>in LocatorStore.selectLocation - location:" + location['name']);

        //var location = null;
        var x = -1;
        for(var i =0;i < this.locations.length;i++){

            if(this.locations[i].id == id){
                //location = this.locations[i];
                x=i;
                break;
            }
        }

        if ( x < 0) {
            console.log("ADDING: " + id + " - " + location['name'] + ":" + isSelected + " to locatorStoreList");
            this.locations.push({
                id: id,
                location: location,
                selected: isSelected
            })
        }
        else {
            
            console.log("UPDATING: " + this.locations[x].id + " - " + this.locations[x].location['name'] + ":" + this.locations[x].selected + " to => " + isSelected);
            this.locations[x].selected = isSelected;
            
        }

        
        this.emit("change");
    }


   IsLocationActive(id){

    var isActive = false;

    for(var i =0;i < this.locations.length;i++){
        //console.log(this.locations[i].id + " " + id);
        if(this.locations[i].id == id){
            console.log("found");
            // location = this.locations[i];
            return this.locations[i].selected;
        }
    }

    // for (location in this.locations) {
    //     if (location.id == id) {
    //         console.log('Location found, returning:' + locations.selected);
    //         return location.selected;
    //         break;
    //     }
    // }

    console.log('Location NOT found, returning: false');
    return isActive;

    // console.log(location);

    //     if(location != null && location.selected == true ){
    //         //console.log(this.locations);
    //     return true;
    //     }
    //     else{
    //         return false;
    //     }
    // return true;
        

   }

    handleActions(action){
        console.log("Location store received an action: ",action);

        switch(action.type){
            case "SELECT_LOCATION":
                this.SelectLocation(action.text,action.isSelected,action.id);
            break;
            case "SELECTED_LOCATION":
            this.selectedLocation ={ 
                id: action.location.clientkey,
                location: action.location,
                selected: true
                };
                console.log("selected the location: " + this.selectedLocation)
            break;
        }
            }

}

const locatorStore = new LocatorStore;
dispatcher.register(locatorStore.handleActions.bind(locatorStore));
export default locatorStore;