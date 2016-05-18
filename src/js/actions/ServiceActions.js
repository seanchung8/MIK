/**
 * Created by haas on 2016-04-25.
 */
import dispatcher from "../dispatcher";


export default {

    selectedPosition(row,col){
        dispatcher.dispatch({
        type: "SELECT_SERVICE",
        row: row,
        col: col
    });

    }

}