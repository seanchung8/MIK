import React from "react";
import ServiceTypeStore from "../stores/ServiceTypeStore";

import  * as ServiceTypeActions from "../actions/ServiceTypeActions";
import  * as PagesActions from "../actions/PagesActions";



export default class ServiceType extends React.Component {

    //Class Constructor
    //Optional Props:
    //Headline: When used this will be bolded text above the description.
    //Description: When used this will be the description used on the page. If not used the default state will be used.
    //Title: When used this will be the description used on the page. If not used the default state will be used.
    //Pic: When used this will override the default image used for the background
    //View: Used to determine a change in the view possible string values {Landing,Events,Classes,Booking}


    constructor(props){
        super(props);
        this.state = {
            serviceTypeStore: ServiceTypeStore.getAll()
        };
    }




    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.ServiceTypeInit();

        ServiceTypeStore.on("change",() =>{
            this.setState({
                serviceTypeStore: ServiceTypeStore.getAll()
            })
        })



    }


    ChangeDisplayScreen(){
        console.log("Changing Display to classes");
        ServiceTypeActions.ChangeDisplayed(this.state.View);
        PagesActions.UpdateDisplayed(this.state.View);
    }

    ServiceTypeInit(){


            if(this.props.Description != null || this.props.Description != " ") {
                this.setState({Description: this.props.Description});
            }

            if(this.props.Title != null || this.props.Title != " ") {
                this.setState({Title: this.props.Title});
            }

            if(this.props.Pic != null || this.props.Pic != " "){
                this.setState({Pic: this.props.Pic});
            }


            if(this.props.Headline != null || this.props.Headline != " "){
                this.setState({Headline: this.props.Headline});
            }

        if(this.props.View != null || this.props.Vview != " "){
            this.setState({View: this.props.View});
        }
        console.log(this.props);
    }



  render() {

      var pic = this.state.Pic

      var BackImg = {

          backgroundImage: pic
      }

      var classNames = require('classnames');
      var btnClass = classNames(
          'm-header m-tile',
          {

              'mod-details': this.state.showDiscription
          });

    return (

        <div className={btnClass} style={BackImg} >
            <div className="m-header-description">
                <div className="m-header-description-header" >{this.state.Title}</div>
                <div className="m-button m-button-more-info"
                     onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>{this.state.showDiscription? "X":"More Info"}</div>
                <div className="m-header-description-text" ><p><b>{this.state.Headline}</b></p><p>{this.state.Description}</p></div>
                <div className="m-button shadow-active-3 m-button-classes"
                     onClick={()=> this.ChangeDisplayScreen()}>View {this.state.Title}</div>
            </div>
        </div>
    );
  }
}
