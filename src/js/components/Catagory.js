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
            headline: "",
            description: "",
            title: "IN STORE CLASSES",
            pic: " "

        };
    }


    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.categoryInit();

        PagesStore.on("change", ()=>{

            this.state = {
                viewing: PagesStore.getViewing()
            }

        })

    }

    componentWillUnmount() {   
    }

    //ServiceTypeInit(){
    categoryInit(){
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
    }


    setPage(){
      PagesActions.selectCatagory(this.state.title);
    }


  render() {

      var pic = this.state.pic;

      var backImg = {

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

        <div className={btnClass} style={backImg}>
            <div class="m-service-description">
                <div class="m-service-description-header" >{this.state.title}</div>
                <div class="m-button shadow-active-3 m-button-more-info"
                     onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>{this.state.showDiscription? "X":"More Info"}</div>
                <div class="m-service-description-text" ><p><b>{this.state.headline}</b></p><p>{this.state.description}</p></div>
                
                <div class="m-button shadow-active-3 m-button-classes" onClick={ ()=> this.setPage()}>See Classes</div>
            </div>
      </div>
    );
  }
}
