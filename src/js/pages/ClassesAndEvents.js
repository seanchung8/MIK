import React from "react";
import Locator from "../components/Locator";
const options = ["English", "French"];
import Category from "../components/Category";
import Service from "../components/Service";
import Booking from "../components/Booking";
import Appointment from "../components/Appointment";
import Checkout from "../components/Checkout";
import PagesStore from "../stores/PagesStore";
import _ from "lodash";
import MIKHeader from "../components/MIKHeader";
import MIKFooter from "../components/MIKFooter";
import  * as PagesActions from "../actions/PagesActions";
import Banner from "../components/Banner";
import Party from "../components/Party";
import ServiceType from "../components/ServiceType";

export default class ClassesAndEvents extends React.Component {

    
    
    constructor (props) {
        super(props)
        this.state = {
            country: this.props.params.country,
            viewing: PagesStore.getAll(),
            selected: "Select Language",
            open: true,
            isBooking: false,
            page: null,
            selectedCategory: PagesStore.getSelectedCategory()
        }
    }

    _onSelect (option) {
        this.setState({selected: option})
    }

    componentWillMount(){
        PagesStore.on("change", ()=>{

            this.state = {
                viewing: PagesStore.getViewing(),
                selectedCategory: PagesStore.getSelectedCategory()
            }

            if (this.state.selectedCategory.length > 0) {
                this.state.viewing = "CategoryClasses";
            }

            this.updateScreen();
        })

        this.updateScreen();
    }

    drawLanding(){
        return(
            <div>
                <MIKHeader country={this.props.params.country}/>
                <div class="m-header-row">
                    <ServiceType
                        headline={"EMBRACE YOUR CREATIVITY IN 2016!"}
                        description={"With our exciting array of classes, there's always something new to learn and do! " +
                            "Try knitting and crochet, painting, drawing, jewelry, paper crafting, " +
                            "cake decorating and more."}
                        title={"IN-STORE CLASSES"}
                        pic={"url(../assets/SeviceTypes/instoreclass.jpg)"}
                        view={"Classes"}/>

                    <ServiceType
                        headline={"BIRTHDAY PARTIES AT MICHAELS JUST GOT BIGGER AND BETTER!"}
                        description={"Choose from lots of fun, kid-friendly party themes, or design your own custom celebration."}
                        title={"IN-STORE EVENTS"}
                        pic={"url(../assets/SeviceTypes/partyevent.jpg)"}
                        view={"Events"}/>
                </div>

                <div class="m-service-row" >
                    <Category
                        headline={"Wilton® Cake Decorating"}
                        description={"Wilton can help you master beginner baking and buttercream basics to advanced cake decorating. " +
                         "Choose from our Courses that build skills in four in-depth sessions, or try the Michaels " +
                          "EXCLUSIVE technique classes that focus on specific cake decorating techniques in a single session."}
                        title={"WILTON CAKE DECORATING"}
                        pic={"url(../assets/Catagories/box_wilton.jpg)"}/>
                    <Category
                        headline={"Grumbacher® Art Painting and Drawing Classes"}
                        description={"Learn basic acrylic painting techniques and create your own art piece featuring landscapes, " +
                         "florals, seascapes, still-life paintings and portraits. " +
                          "No painting experience required!"}
                        title={"ART PAINTING AND DRAWING"}
                        pic={"url(../assets/Catagories/ArtPaintingAndDrawing.jpg)"}/>
                    <Category
                        headline={"Jewelry"}
                        description={"Complete a unique jewelry piece with the guidance of our qualified instructors. " +
                         "You'll learn the latest trends, tricks and techniques for using the right tools, " +
                          "beads and findings that will bring your inspiration to life."}
                        title={"JEWELRY MAKING"}
                        pic={"url(../assets/Catagories/jewelry.jpg)"}/>
                </div>

                <div class="m-service-row" >
                    <Category
                        headline={"Paper Crafting and Mixed Media"}
                        description={"Join the movement to take memories off your pages and into your life. " +
                         "Sharpen your paper crafting skills, play with ink or test your favorite tools. " +
                          "No matter what you love to paper-craft, you’ll find your class in our paper crafting classes. "}
                        title={"PAPER AND MIXED MEDIA"}
                        pic={"url(../assets/Catagories/paperCrafting.jpg)"}/>
                    <Category
                        headline={"CYC Discover™Knit and Crochet Classes"}
                        description={"Whether you want to learn how to knit or crochet or already know the basics, " +
                         "Craft Yarn Council's Discover Knit and Crochet class series offers something for everyone. " +
                          "Learn new skills by completing a fun and fashionable project with the guidance of our certified instructors."}
                        title={"KNIT AND CROCHET"}
                        pic={"url(../assets/Catagories/knitAndCrochet.jpg)"}/>
                    <Category
                        headline={"Kids Classes and Kids Club"}
                        description={"Discover the educational and developmental benefits of crafting in our Kids' Classes. \n" +
                         "\nWith Kids' Club® let your kids explore their creativity while you shop! Just $2 per child ages 3 and up. All supplies included."}
                        title={"KIDS' PROGRAMS"}
                        pic={"url(../assets/Catagories/kidsPrograms.jpg)"}/>
                </div>

                <div class="m-service-row" >
                    <Category
                        headline={"Trend Classes"}
                        description={"Be in-style and on-trend. Create what moves you in these special DIY classes focusing on the latest trends. " +
                         "Enroll now!"}
                        title={"TREND CLASSES"}
                        pic={"url(../assets/Catagories/TrendClasses.jpg)"}/>
                    <Category
                        headline={"Birthday Parties"}
                        description={"Birthday Parties at Michaels are now bigger and better. Choose from lots of fun, kid friendly party themes, " +
                         "or design your own custom celebration. See your local store associate to learn more and book your party."}
                        title={"BIRTHDAY PARTIES"}
                        pic={"url(../assets/Catagories/Birthday.jpg)"}/>
                </div>
                <MIKFooter/>
            </div>

        );
    }

    dhangeDisplayScreen(){
        PagesActions.updateDisplayed(this.state.view);
    }

    drawEvents(){

        var catStyle = {
            marginLeft: 350,
            marginTop: 0,
        };

        return (<div>

            <div style={catStyle}>
                <MIKHeader country={this.props.params.country}/>
                    <div>
                        <Banner 
                            headline={"BIRTHDAY PARTIES AT MICHAELS JUST GOT BIGGER AND BETTER!"}
                            description={"Choose from lots of fun, kid-friendly party themes, or design your own custom celebration."}
                            title={"IN-STORE EVENTS"}
                            view={"Events"}
                            pic={"url(../assets/SeviceTypes/partyevent.jpg)"}
                            navElenment={"Classes"}            />
                    </div>
                    <div class="m-party-row" >
                        <Party
                            headline={"PIRATE ADVENTURE"}
                            description={"Crafts for this seaworthy bash include a treasure map frame, " + 
                                "an eye patch and bandana, a mustache-on-a-stick prop, and a treasure chest."}
                            title={"PIRATE ADVENTURE"}
                            pic={"url(../assets/Parties/pirate_adventure.jpg)"}/>

                        <Party
                            headline={"PRETTY PRINCESSES"}
                            description={"Royal guests will create an embellished crown, " + 
                                "a royal scroll and a princess photo frame."}
                            title={"PRETTY PRINCESSES"}
                            pic={"url(../assets/Parties/pretty_princess.jpg)"}/>
                        <Party
                            headline={"SUPERHERO SQUAD"}
                            description={"Suit up for a superhero party! Heroes will craft a mask to conceal " + 
                                "their true identities, a colorful cape and cuffs, and a photo frame."}
                            title={"SUPERHERO SQUAD"}
                            pic={"url(../assets/Parties/super_hero_squad.jpg)"}/>
                    </div>

                <MIKFooter/>
            </div>
            <div><Locator country={this.props.params.country} viewing={this.state.viewing}/></div>

            </div>
        );
    }

    drawCatagories(){

        var varStyle = {
            marginLeft: 350,
            marginTop: 0,
        };

        return (
            <div>
                <div style={varStyle}>

                    <MIKHeader country={this.props.params.country}/>
                    <Banner 
                        headline={"This is the headline"}
                        description={"This is the Category discription"}
                        title={"This is the Category"}
                        view={"Category"}
                        pic={"url(../assets/SeviceTypes/partyevent.jpg)"}
                        navElenment={"Classes"}/>

                    <MIKFooter/>
                </div>
                <div>
                    <Locator country={this.props.params.country} viewing={this.state.viewing}/>
                </div>
            </div>
        );
    }

    drawClasses(){

        var catStyle = {
            marginLeft: 350,
            marginTop: 0,
        };

        return (
            <div>


                <div style={catStyle}>
                    <MIKHeader country={this.props.params.country}/>

                    <div>
                            <Banner 
                                headline={"EMBRACE YOUR CREATIVITY IN 2016!"}
                                description={"With our exciting array of classes, there's always something new to learn and do! " +
                                    "Try knitting and crochet, painting, drawing, jewelry, paper crafting, " +
                                    "cake decorating and more."}
                                title={"IN-STORE CLASSES"}
                                pic={"url(../assets/SeviceTypes/instoreclass.jpg)"}
                                view={"Classes"}            
                                navElenment={"Events"} />
                    </div>

                    <div class="m-service-row" >
                            <Category
                            headline={"Wilton® Cake Decorating"}
                            description={"Wilton can help you master beginner baking and buttercream basics to advanced cake decorating. " +
                                 "Choose from our Courses that build skills in four in-depth sessions, or try the Michaels " +
                                  "EXCLUSIVE technique classes that focus on specific cake decorating techniques in a single session."}
                            title={"WILTON CAKE DECORATING"}
                            pic={"url(../assets/Catagories/box_wilton.jpg)"}/>

                        <Category
                            headline={"Grumbacher® Art Painting and Drawing Classes"}
                            description={"Learn basic acrylic painting techniques and create your own art piece featuring landscapes, " +
                                 "florals, seascapes, still-life paintings and portraits. " +
                                  "No painting experience required!"}
                            title={"ART PAINTING AND DRAWING"}
                            pic={"url(../assets/Catagories/ArtPaintingAndDrawing.jpg)"}/>
                        <Category
                            headline={"Jewelry"}
                            description={"Complete a unique jewelry piece with the guidance of our qualified instructors. " +
                                 "You'll learn the latest trends, tricks and techniques for using the right tools, " +
                                  "beads and findings that will bring your inspiration to life."}
                            title={"JEWELRY MAKING"}
                            pic={"url(../assets/Catagories/jewelry.jpg)"}/>
                    </div>

                    <div class="m-service-row" >
                            <Category
                            headline={"Paper Crafting and Mixed Media"}
                            description={"Join the movement to take memories off your pages and into your life. " +
                                 "Sharpen your paper crafting skills, play with ink or test your favorite tools. " +
                                  "No matter what you love to paper-craft, you’ll find your class in our paper crafting classes. "}
                            title={"PAPER AND MIXED MEDIA"}
                            pic={"url(../assets/Catagories/paperCrafting.jpg)"}/>
                        <Category
                            headline={"CYC Discover™Knit and Crochet Classes"}
                            description={"Whether you want to learn how to knit or crochet or already know the basics, " +
                                 "Craft Yarn Council's Discover Knit and Crochet class series offers something for everyone. " +
                                  "Learn new skills by completing a fun and fashionable project with the guidance of our certified instructors."}
                            title={"KNIT AND CROCHET"}
                            pic={"url(../assets/Catagories/knitAndCrochet.jpg)"}/>
                        <Category
                            headline={"Kids Classes and Kids Club"}
                            description={"Discover the educational and developmental benefits of crafting in our Kids' Classes. \n" +
                                 "\nWith Kids' Club® let your kids explore their creativity while you shop! Just $2 per child ages 3 and up. All supplies included."}
                            title={"KIDS' PROGRAMS"}
                            pic={"url(../assets/Catagories/kidsPrograms.jpg)"}/>
                    </div>

                    <div class="m-service-row" >
                            <Category
                            headline={"Trend Classes"}
                            description={"Be in-style and on-trend. Create what moves you in these special DIY classes focusing on the latest trends. " +
                                 "Enroll now!"}
                            title={"TREND CLASSES"}
                            pic={"url(../assets/Catagories/TrendClasses.jpg)"}/>
                        <Category
                            headline={"Birthday Parties"}
                            description={"Birthday Parties at Michaels are now bigger and better. Choose from lots of fun, kid friendly party themes, " +
                                 "or design your own custom celebration. See your local store associate to learn more and book your party."}
                            title={"BIRTHDAY PARTIES"}
                            pic={"url(../assets/Catagories/Birthday.jpg)"}/>
                    </div>
                    <MIKFooter/>

                </div>
                <div><Locator country={this.props.params.country} viewing={this.state.viewing}/></div>

            </div>);
    }

    drawCategoryClasses(){
        var catTitle = this.state.selectedCategory;

        if (catTitle === null) {
            alert('Service category is not selected');
            return;
        }

        var stmp = catTitle.split(" ");
        var tmpTitle =stmp[0];

        var catStyle = {
            marginLeft: 350,
            marginTop: 0,
        };


        return(
            <div style={catStyle}>
        
                <div>
                    <MIKHeader country={this.props.params.country}/>

                    <Banner 
                        headline={"EMBRACE YOUR CREATIVITY IN 2016!"}
                        description={"With our exciting array of classes, there's always something new to learn and do! " +
                            "Try knitting and crochet, painting, drawing, jewelry, paper crafting, " +
                            "cake decorating and more."}
                        title={"IN-STORE CLASSES"}
                        pic={"url(../assets/SeviceTypes/instoreclass.jpg)"}
                        view={"Classes"}            
                        navElenment={"Classes"}/>

                    <div class="m-service-row" >
                        <Service
                            headline={"Class 1"}
                            description={"Wilton can help you master beginner baking and buttercream basics to advanced cake decorating. " +
                             "Choose from our Courses that build skills in four in-depth sessions, or try the Michaels " +
                              "EXCLUSIVE technique classes that focus on specific cake decorating techniques in a single session."}
                            title={tmpTitle + " 1" }
                            pic={"url(../assets/Catagories/box_wilton.jpg)"}
                            price='30' seats='4'/>
                        <Service
                            headline={"Class 2"}
                            description={"Learn basic acrylic painting techniques and create your own art piece featuring landscapes, " +
                             "florals, seascapes, still-life paintings and portraits. " +
                              "No painting experience required!"}
                            title={tmpTitle + " 2"}
                            pic={"url(../assets/Catagories/ArtPaintingAndDrawing.jpg)"}
                            price='25' seats='2'/>
                        <Service
                            headline={"Class 3"}
                            description={"Complete a unique jewelry piece with the guidance of our qualified instructors. " +
                             "You'll learn the latest trends, tricks and techniques for using the right tools, " +
                              "beads and findings that will bring your inspiration to life."}
                            title={tmpTitle + " 3"}
                            pic={"url(../assets/Catagories/jewelry.jpg)"}
                            price='10' seats='9'/>
                    </div>

                    <div class="m-service-row" >
                        <Service
                            headline={"Class 4"}
                            description={"Join the movement to take memories off your pages and into your life. " +
                             "Sharpen your paper crafting skills, play with ink or test your favorite tools. " +
                              "No matter what you love to paper-craft, you’ll find your class in our paper crafting classes. "}
                            title={tmpTitle + " 4"}
                            pic={"url(../assets/Catagories/paperCrafting.jpg)"}
                            price='5' seats='8'/>
                        <Service
                            headline={"Class 5"}
                            description={"Whether you want to learn how to knit or crochet or already know the basics, " +
                             "Craft Yarn Council's Discover Knit and Crochet class series offers something for everyone. " +
                              "Learn new skills by completing a fun and fashionable project with the guidance of our certified instructors."}
                            title={tmpTitle + " 5"}
                            pic={"url(../assets/Catagories/knitAndCrochet.jpg)"}
                            price='10' seats='1'/>
                        <Service
                            headline={"Class 6"}
                            description={"Discover the educational and developmental benefits of crafting in our Kids' Classes. \n" +
                             "\nWith Kids' Club® let your kids explore their creativity while you shop! Just $2 per child ages 3 and up. All supplies included."}
                            title={tmpTitle + " 6"}
                            pic={"url(../assets/Catagories/kidsPrograms.jpg)"}
                            price='25' seats='6'/>
                    </div>

                    <div class="m-service-row" >
                        <Service
                            headline={"Class 7"}
                            description={"Be in-style and on-trend. Create what moves you in these special DIY classes focusing on the latest trends. " +
                             "Enroll now!"}
                            title={tmpTitle + " 7"}
                            pic={"url(../assets/Catagories/TrendClasses.jpg)"}
                            price='40' seats='5'/>
                        <Service
                            headline={"Class 8"}
                            description={"Birthday Parties at Michaels are now bigger and better. Choose from lots of fun, kid friendly party themes, " +
                             "or design your own custom celebration. See your local store associate to learn more and book your party."}
                            title={tmpTitle + " 8"}
                            pic={"url(../assets/Catagories/Birthday.jpg)"}
                            price='20' seats='3'/>

                    </div>
                    <MIKFooter/>

                </div>
                <div><Locator country={this.props.params.country} viewing={this.state.viewing}/></div>

            </div>
        );


    }


    drawBooking() {

        var contain={
            minHeight:800
        }

        return(
            <div>
                <div>
                    <div><MIKHeader/></div>
                    <div style={contain}><Booking/></div>
                </div>
                <div><MIKFooter/></div>
            </div>

        );
    }

    updateScreen(){

        switch (this.state.viewing) {
            case "Landing":
                this.setState({page: this.drawLanding()});
                break;
            case "Classes":
                this.setState({page: this.drawClasses()});
                break;
            case "Events":
                this.setState({page: this.drawEvents()});
                break;
            case "Catagories":
                this.setState({page: this.categoryDraw()});
                break;
            case "CategoryClasses":
                this.setState({page: this.drawCategoryClasses()});
                break;
            case "Booking":    
                this.setState({page: this.drawBooking()});
                break;
            default:
                alert("viewing: " + this.state.viewing + " is not handled");

        }

    }

  render() {

      const {params} = this.props;

      const defaultOption = this.state.selected
      const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected

      var condition;
      if (params.country == 'CA') {
          condition = true;
      }
      else {
          condition = false;
      }

      var selctedLanguage;

      if (placeHolderValue == 'English') {
          selctedLanguage = true;
      }
      else {
          selctedLanguage = false;
      }

      var shownPage = this.state.isBooking;

      return (<div>{this.state.page}</div>);
  }

}
