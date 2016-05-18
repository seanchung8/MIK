import React from "react";
import PagesStore from "../stores/PagesStore";
import  * as PagesActions from "../actions/PagesActions";
import _ from 'lodash'

export default class Banner extends React.Component {




    //Class Constructor
    //Optional Props:
    //Headline: When used this will be bolded text above the description.
    //Description: When used this will be the discription used on the page. If not used the default state will be used.
    //Title: When used this will be the discription used on the page. If not used the default state will be used.
    //Pic: When used this will override the default image used for the backgroundd
    //ViewState: Used to determine a change in the view possible string values {Landing,Events,Classes,Catagories,Booking}
    //NaveElement is used to determine what page to switch to in the banner

  constructor (props) {
    super(props)
      this.state = {
        viewing: PagesStore.getAll(),
            Headline: this.props.Headline,
            Description: this.props.Description,
            Title: this.props.Title,
            Pic: this.props.Pic,
            NavElenment: this.props.NavElenment

    }
  }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.bannerInit();

        // PagesStore.on("change", ()=>{

            // this.state = {
            // viewing: PagesStore.getAll(),
            // Headline: this.props.Headline,
            // Description: this.props.Description,
            // Title: this.props.Title,
            // Pic: this.props.Pic,
            // NavElenment: this.props.NavElenment
            // }
            // console.log("Banner.ChangingPage to: " + this.state.viewing)

            // this will cause a warning about setting the state
            //this.bannerInit();
        // })

    }

    bannerInit(){

        //if(this.props.Description != null || this.props.Description != " ") {
            this.setState({Description: this.props.Description});
        //}

        //if(this.props.Title != null || this.props.Title != " ") {
            this.setState({Title: this.props.Title});
        //}

        //if(this.props.Pic != null || this.props.Pic != " "){
            this.setState({Pic: this.props.Pic});
        //}

        //if(this.props.Headline != null || this.props.Headline != " "){
            this.setState({Headline: this.props.Headline});
        //}

        //if(this.props.NavElenment != null || this.props.NavElenment != " "){
            this.setState({NavElenment: this.props.NavElenment});
        //}

    }


    setPage(){
      PagesActions.UpdateDisplayed(this.props.NavElenment);
    }


    render() {
              
        var BackImg = {
            backgroundImage: this.props.Pic,
        }

        return (
                <div class="m-title m-tile" >
                    <div class="m-title-image-event" style={BackImg}></div>
                    <div class="m-title-description">
                        <div class="m-title-header">{this.props.Title}</div>
                        <div class="m-title-text"><p><b>{this.props.Headline}</b></p><p>{this.props.Description}</p></div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3" onClick={ ()=> this.setPage()}>See {this.props.NavElenment}</div>
                    </div>
                </div> 
            );
    }

}
