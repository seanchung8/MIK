/**
 * Created by damion on 2016-04-09.
 */

import {EventEmitter} from "events";


class DropdownStore extends EventEmitter{

    constructor(){

        super()
        this.dropdowns = [
            {
                id: 1,
                text: "English",
                lngSelect: false
            },
            {
                id: 2,
                text: "French",
                lngSelect: false
            }
        ]
    }

    getAll(){
        return this.dropdowns;
    }


}

const dropdownStore = new DropdownStore;

export default dropdownStore;