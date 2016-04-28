import React from "react";
import PagesStore from "../stores/PagesStore";
import CatagoryStore from '../stores/CatagoryStore';





export default class Catagory extends React.Component {

    //Class Constructor
    //Optional Props:
    //Headline: When used this will be bolded text above the description.
    //Description: When used this will be the discription used on the page. If not used the default state will be used.
    //Title: When used this will be the discription used on the page. If not used the default state will be used.
    //Pic: When used this will override the default image used for the background
    //ViewState: Used to determine a change in the view possible string values {Landing,Events,Classes,Booking}
    
    constructor(props){
        super(props);
        this.state = {
            viewing: PagesStore.getAll(),
            Headline: "",
            Description: "Sed sagittis in neque laoreet dapibus. Maecenas eget egestas tortor. In massa leo, ullamcorper et lacus vitae, " +
            "volutpat scelerisque mauris. Donec sollicitudin nisl scelerisque nunc placerat, " +
            "nec rhoncus lectus maximus. Maecenas sapien libero, cursus in lobortis non, vestibulum sed magna. " +
            "Curabitur at arcu in mauris suscipit tincidunt eget id ex. Aliquam sodales convallis vehicula. Pellentesque ultrices, ",
            Title: "IN STORE CLASSES",
            Pic: " "

        };
    }


    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.ServiceTypeInit();

        PagesStore.on("change", ()=>{

            this.state = {
                viewing: PagesStore.getViewing()
            }
            console.log("ChangingPage to: " + this.state.viewing)

        })

        CatagoryStore.on("change", ()=>{


        })
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
    }


    setPage(){

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

      console.log(this.props.viewing);
      var classNames = require('classnames');
      var btnClass = classNames(
          'm-tile anim-tile-in',
          {
              'm-service': landing,
              'm-service2': notLanding,
              'mod-details': this.state.showDiscription
          });

    return (

        <div className={btnClass} style={BackImg}>
            <div class="m-service-description">
                <div class="m-service-description-header" >{this.state.Title}</div>
                <div class="m-button shadow-active-3 m-button-more-info"
                     onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>{this.state.showDiscription? "X":"More Info"}</div>
                <div class="m-service-description-text" ><p><b>{this.state.Headline}</b></p><p>{this.state.Description}</p></div>
                <p/>
                <div class="m-button shadow-active-3 m-button-classes"
                     onClick={ ()=> this.setState({ showDiscription: !this.state.showDiscription })}>See Classes</div>
            </div>
      </div>
    );
  }
}
