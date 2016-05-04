
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import _ from 'lodash';


class LocatorStore extends EventEmitter{

    constructor(props){

        super(props)
        this.locations = [
                {
                    id: 39393,
                    location: null,
                    selected: false
                },
                {
                    id: 40923,
                    location: null,
                    selected: false
                },
            ];
    }




    getAll(){
        return this.locations;
    }


    SelectLocation(location,isSelected){

        

        this.locations.push({
            id: location.clientKey,
            location: location,
            selected: isSelected
        })

        this.emit("change");
    }


   IsLocationActive(loc){


        var id = loc.clientKey;

        var locs= this.locations.map((location) => {

          
        
        });
        locs = eval(locs);
console.log("locations list: "+locs);

   }

    handleActions(action){
        console.log("Location store received an action: ",action);

        switch(action.type){
            case "SELECT_LOCATION":
                this.SelectLocation(action.text,action.isSelected);
            break;
        }
    }

}

const locatorStore = new LocatorStore;
dispatcher.register(locatorStore.handleActions.bind(locatorStore));
export default locatorStore;