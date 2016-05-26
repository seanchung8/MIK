
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";


class LocatorStore extends EventEmitter{

    constructor(props){

        super(props)
        this.locations = [ ];
        this.selectedLocation = {};
        this.locationSelected = false;
        this.isLocationLocked = false;
    }

    getAll(){
        return this.locations;
    }

    isLocationLocked(){
        return this.isLocationLocked;
    }


    selectLocation(location,isSelected,id){

        var x = -1;
        for(var i =0;i < this.locations.length;i++){

            if(this.locations[i].id == id){
                //location = this.locations[i];
                x=i;
                break;
            }
        }

        if ( x < 0) {
            this.locations.push({
                id: id,
                location: location,
                selected: isSelected
            })
        }
        else {
            this.locations[x].selected = isSelected;
        }

        this.emit("change");
    }


   clearAndLockLoc(locked){
        if(locked){
            this.locations =[];
            this.locations.push(this.selectedLocation);
        }
   } 

   isLocationActive(id){

    var isActive = false;

    for(var i =0;i < this.locations.length;i++){
        if(this.locations[i].id == id){
            return this.locations[i].selected;
        }
    }
    return isActive;
   }

    handleActions(action){

        switch(action.type){
            case "SELECT_LOCATION":
                this.selectLocation(action.text,action.isSelected,action.id);
            break;

            case "SELECTED_LOCATION":
            this.selectedLocation ={ 
                id: action.location.clientkey,
                location: action.location,
                selected: true
                };
            break;

            case "LOCATION_LOCKED":
                this.isLocationLocked = action.locked;
                this.clearAndLockLoc(action.locked);
                this.emit("change");
            break;
        }
    }

}

const locatorStore = new LocatorStore;
dispatcher.register(locatorStore.handleActions.bind(locatorStore));
export default locatorStore;