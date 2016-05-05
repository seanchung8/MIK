
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import _ from 'lodash';


class LocatorStore extends EventEmitter{

    constructor(props){

        super(props)
        this.locations = [ ];
    }




    getAll(){
        return this.locations;
    }


    SelectLocation(location,isSelected,id){

        var location = null;
        var x =0
    for(var i =0;i < this.locations.length;i++){

        if(this.locations[i].id == id){
            location = this.locations[i];
            x=i;
            break;
        }
    }

    if(location == null){
        this.locations.push({
            id: id,
            location: location,
            selected: isSelected
        })
    }
    else {
        
        this.locations[x].selected = false;
        console.log(location);
    }

        
        this.emit("change");
    }


   IsLocationActive(id){

    var location = null;

    for(var i =0;i < this.locations.length;i++){
        console.log(this.locations[i].id + " " + id);
        if(this.locations[i].id == id){
            console.log("found");
            location = this.locations[i];
        }

    }

    console.log(location);

        if(location != null && location.selected == true ){
            //console.log(this.locations);
        return true;
        }
        else{
            return false;
        }
return true;
        

   }

    handleActions(action){
        console.log("Location store received an action: ",action);

        switch(action.type){
            case "SELECT_LOCATION":
                this.SelectLocation(action.text,action.isSelected,action.id);
            break;
        }
    }

}

const locatorStore = new LocatorStore;
dispatcher.register(locatorStore.handleActions.bind(locatorStore));
export default locatorStore;