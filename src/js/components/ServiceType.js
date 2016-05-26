import React from "react";
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
        };
    }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.ServiceTypeInit();

    }

    ChangeDisplayScreen(){
        PagesActions.UpdateDisplayed(this.state.view);
    }

    ServiceTypeInit(){


        if(this.props.description != null || this.props.description != " ") {
            this.setState({description: this.props.description});
        }

        if(this.props.title != null || this.props.title != " ") {
            this.setState({title: this.props.title});
        }

        if(this.props.pic != null || this.props.pic != " "){
            this.setState({pic: this.props.pic});
        }


        if(this.props.headline != null || this.props.headline != " "){
            this.setState({headline: this.props.headline});
        }

        if(this.props.view != null || this.props.view != " "){
            this.setState({view: this.props.view});
        }
    }



  render() {

      var pic = this.state.pic

      var backImg = {

          backgroundImage: pic
      }

      var classNames = require('classnames');
      var btnClass = classNames(
          'm-header m-tile',
          {

              'mod-details': this.state.showDiscription
          });

    return (

        <div className={btnClass} style={backImg} >
            <div className="m-header-description">
                <div className="m-header-description-header" >{this.state.title}</div>
                <div className="m-button m-button-more-info"
                     onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>{this.state.showDiscription? "X":"More Info"}</div>
                <div className="m-header-description-text" ><p><b>{this.state.headline}</b></p><p>{this.state.description}</p></div>
                <div className="m-button shadow-active-3 m-button-classes"
                     onClick={()=> this.ChangeDisplayScreen()}>View {this.state.title}</div>
            </div>
        </div>
    );
  }
}
