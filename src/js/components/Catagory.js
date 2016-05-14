import React from "react";
import PagesStore from "../stores/PagesStore";
import  * as PagesActions from "../actions/PagesActions";




export default class Catagory extends React.Component {

    //Class Constructor
    //Optional Props:
    //Headline: When used this will be bolded text above the description.
    //Description: When used this will be the discription used on the page. If not used the default state will be used.
    //Title: When used this will be the discription used on the page. If not used the default state will be used.
    //Pic: When used this will override the default image used for the backgroundd
    //ViewState: Used to determine a change in the view possible string values {Landing,Events,Classes,Catagories,Booking}
    
    constructor(props){
        super(props);
        this.state = {
            viewing: PagesStore.getAll(),
            Headline: "",
            Description: "",
            Title: "IN STORE CLASSES",
            Pic: " "

        };
    }


    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        //this.ServiceTypeInit();
        this.CategoryInit();

        PagesStore.on("change", ()=>{

            this.state = {
                viewing: PagesStore.getViewing()
            }
            console.log("ChangingPage to: " + this.state.viewing)

        })

    }

    componentWillUnmount() {
        console.log("=== in Category.componentWillUnmount() ===");    
    }

    //ServiceTypeInit(){
    CategoryInit(){
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
    }


    setPage(){
      console.log("*** in Category.setPage() this.state.Title:" + this.state.Title);
      //PagesActions.UpdateDisplayed("Catagories", this.state.Title);
      PagesActions.SelectCatagory(this.state.Title);
    }


  render() {

      var pic = this.state.Pic;

      var BackImg = {

          backgroundImage: pic,
          
      }

      var landing;
      var notLanding;

      if(this.state.viewing != "Landing"){
          notLanding = true;
          landing =false;
      }
      else{
          notLanding = false;
          landing =true;
      }

      var classNames = require('classnames');
      var btnClass = classNames(
          'm-service m-tile anim-tile-in',
      {
          'mod-details': this.state.showDiscription
      });

    return (

        <div className={btnClass} style={BackImg}>
            <div class="m-service-description">
                <div class="m-service-description-header" >{this.state.Title}</div>
                <div class="m-button shadow-active-3 m-button-more-info"
                     onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>{this.state.showDiscription? "X":"More Info"}</div>
                <div class="m-service-description-text" ><p><b>{this.state.Headline}</b></p><p>{this.state.Description}</p></div>
                
                <div class="m-button shadow-active-3 m-button-classes" onClick={ ()=> this.setPage()}>See Classes</div>
            </div>
      </div>
    );
  }
}
