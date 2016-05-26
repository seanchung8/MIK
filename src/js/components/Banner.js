import React from "react";
import PagesStore from "../stores/PagesStore";
import  * as PagesActions from "../actions/PagesActions";
import _ from "lodash"

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
            headline: this.props.headline,
            description: this.props.description,
            title: this.props.title,
            pic: this.props.pic,
            navElenment: this.props.navElenment

    }
  }

    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.bannerInit();
    }

    bannerInit(){
        this.setState({description: this.props.description});
        this.setState({title: this.props.title});
        this.setState({pic: this.props.pic});
        this.setState({headline: this.props.headline});
        this.setState({navElenment: this.props.navElenment});

    }


    setPage(){
      PagesActions.updateDisplayed(this.props.navElenment);
    }


    render() {
              
        var backImg = {
            backgroundImage: this.props.pic,
        }

        return (
                <div class="m-title m-tile" >
                    <div class="m-title-image-event" style={backImg}></div>
                    <div class="m-title-description">
                        <div class="m-title-header">{this.props.title}</div>
                        <div class="m-title-text"><p><b>{this.props.Headline}</b></p><p>{this.props.description}</p></div>
                        <div class="m-button shadow-1 shadow-hover-2 shadow-active-3" onClick={ ()=> this.setPage()}>See {this.props.navElenment}</div>
                    </div>
                </div> 
            );
    }

}
