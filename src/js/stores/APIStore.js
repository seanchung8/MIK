/**
 * Created by damion on 2016-04-09.
 */
import xml2js from 'xml2js';
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class APIStore extends EventEmitter{

    constructor(){

        super()
        this.serviceType = []
        this.searchParms ={
            zip:8675309,
            country:"",
            radius:25
        }
        
        this.locations =[]



    }




    getAll(){
        return this.serviceType;
    }

    getLocations(){
        return this.locations;
    }

    getSearchZip(){
        return this.searchParms.zip;
    }

    getServices(){

    }

    getEvents(){

    }

    createLocationCall(zip,country,radius){

            var call = "http://api.slippymap.com/rest?&xml_request=" + encodeURIComponent("<request> " +
                "<appkey>7D3183D8-683E-11E3-A044-AF8B407E493E</appkey> " +
                "<formdata id='locatorsearch'> " +
                "<geolocs> " +
                "<geoloc> " +
                "<addressline>" + (zip != "" ? zip : "8675309") + "</addressline>" +
                "<country>" + country + "</country> " +
                "</geoloc> " +
                "</geolocs> " +
                "<searchradius>" + radius + "</searchradius> " +
                "</formdata> " +
                "</request>"
            );

            this.searchParms = {
                zip:zip,
                country:country,
                radius:radius

            };
            this.makeLocationCall({call});


    }

    makeLocationCall(query){
        var request = require('superagent');
        var xml2jsParser = require('superagent-xml2jsparser');
        var parser = new xml2js.Parser();
        var dataFromJson = null;
        query = query != "" ? query.call : "https://localhost";
        if(query != "") {
            request
                .get(query)
                .accept('text/xml')
                .parse(xml2jsParser) // add the parser function
                .then((res) => {

                    var xml = res.text;

                    var myXML = parser.parseString(xml, function (err, result) {
                        //Extract the value from the data element
                        try {
                            dataFromJson = require('util').inspect(result.response.collection[0].poi, {
                                showHidden: false,
                                depth: null
                            });
                        } catch (exc)
                        {
                            if (result != null
                                && result.response != null
                                && result.response.message != null
                                && result.response.message[0] != null
                                && result.response.message[0].text != null
                                && result.response.message[0].text[0] != null
                            )
                            {
                                console.log(result.response.message[0].text[0]);
                            }
                        }

                        dataFromJson = eval(dataFromJson);
                    });
                    this.locations =[];

                    this.locations = dataFromJson;

                })
        }
        else{
            this.locations = [];
        }
        this.emit("change");
    }

    makeServiceCall(serviceName,location=null){

    }

    makeEventCall(event,location){

    }


    handleActions(action){

        switch(action.type){

            case 'GET_LOCATIONS':
            break;
            case 'GET_SERVICES':
            break;
            case 'GET_EVENTS':
            break;
            case 'SEARCH_STORES':
            console.log(action)
                this.createLocationCall(action.zip,action.countries,action.radius);
            break;

        }

    }

}

const serviceTypeStore = new ServiceTypeStore;
dispatcher.register(serviceTypeStore.handleActions.bind(serviceTypeStore));

export default serviceTypeStore;