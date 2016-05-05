import React from "react";
import Dropdown from 'react-dropdown'
import Locator from '../components/Locator'
const options = ['English', 'French']
import ServiceType from '../components/ServiceType'
import Catagory from '../components/Catagory'
import Service from '../components/Service'
import Booking from '../components/Booking'
import Appointment from '../components/Appointment'
import Checkout from '../components/Checkout'
import PagesStore from "../stores/PagesStore"
import _ from 'lodash';
import MIKHeader from '../components/MIKHeader'
import MIKFooter from '../components/MIKFooter'
import ServiceTypeActions from "../actions/ServiceTypeActions"
import  * as PagesActions from "../actions/PagesActions"
import Banner from "../components/Banner"
//import Service from "../components/Service"

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
            selectedCatagory: PagesStore.getSelectedCatagory()
        }
        //this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option})
    }


    componentWillMount(){
        PagesStore.on("change", ()=>{

            this.state = {
                viewing: PagesStore.getViewing(),
                selectedCatagory: PagesStore.getSelectedCatagory()
            }
            console.log("***ChangingPage to: " + this.state.viewing);
            console.log("***this.state.selectedCatagory:" + this.state.selectedCatagory);
            if (this.state.selectedCatagory.length > 0) {
                this.state.viewing = 'CategoryClasses';
            }
            this.UpdateScreen();
        })
        this.UpdateScreen();
    }

    componentWillUnmount() {
        console.log("=== in ClassesAndEvents.componentWillUnmount() ===");    
    }

    DrawLanding(){
        console.log("*** in DrawLanding ***");
        return(
            <div>
                <MIKHeader/>
                <div>

                    <ServiceType
                        Headline={"EMBRACE YOUR CREATIVITY IN 2016!"}
                        Description={"With our exciting array of classes, there's always something new to learn and do! " +
                            "Try knitting and crochet, painting, drawing, jewelry, paper crafting, " +
                            "cake decorating and more."}
                        Title={"IN-STORE CLASSES"}
                        Pic={"url(../assets/SeviceTypes/instoreclass.jpg)"}
                        View={"Classes"}/>

                    <ServiceType
                        Headline={"BIRTHDAY PARTIES AT MICHAELS JUST GOT BIGGER AND BETTER!"}
                        Description={"Choose from lots of fun, kid-friendly party themes, or design your own custom celebration."}
                        Title={"IN-STORE EVENTS"}
                        Pic={"url(../assets/SeviceTypes/partyevent.jpg)"}
                        View={"Events"}/>
                </div>

                <div class="m-service-row" >
                    <Catagory
                        Headline={"Wilton® Cake Decorating"}
                        Description={"Wilton can help you master beginner baking and buttercream basics to advanced cake decorating. " +
                         "Choose from our Courses that build skills in four in-depth sessions, or try the Michaels " +
                          "EXCLUSIVE technique classes that focus on specific cake decorating techniques in a single session."}
                        Title={"WILTON CAKE DECORATING"}
                        Pic={"url(../assets/Catagories/box_wilton.jpg)"}/>
                    <Catagory
                        Headline={"Grumbacher® Art Painting and Drawing Classes"}
                        Description={"Learn basic acrylic painting techniques and create your own art piece featuring landscapes, " +
                         "florals, seascapes, still-life paintings and portraits. " +
                          "No painting experience required!"}
                        Title={"ART PAINTING AND DRAWING"}
                        Pic={"url(../assets/Catagories/ArtPaintingAndDrawing.jpg)"}/>
                    <Catagory
                        Headline={"Jewelry"}
                        Description={"Complete a unique jewelry piece with the guidance of our qualified instructors. " +
                         "You'll learn the latest trends, tricks and techniques for using the right tools, " +
                          "beads and findings that will bring your inspiration to life."}
                        Title={"JEWELRY MAKING"}
                        Pic={"url(../assets/Catagories/jewelry.jpg)"}/>
                </div>

                <div class="m-service-row" >
                    <Catagory
                        Headline={"Paper Crafting and Mixed Media"}
                        Description={"Join the movement to take memories off your pages and into your life. " +
                         "Sharpen your paper crafting skills, play with ink or test your favorite tools. " +
                          "No matter what you love to paper-craft, you’ll find your class in our paper crafting classes. "}
                        Title={"PAPER AND MIXED MEDIA"}
                        Pic={"url(../assets/Catagories/paperCrafting.jpg)"}/>
                    <Catagory
                        Headline={"CYC Discover™Knit and Crochet Classes"}
                        Description={"Whether you want to learn how to knit or crochet or already know the basics, " +
                         "Craft Yarn Council's Discover Knit and Crochet class series offers something for everyone. " +
                          "Learn new skills by completing a fun and fashionable project with the guidance of our certified instructors."}
                        Title={"KNIT AND CROCHET"}
                        Pic={"url(../assets/Catagories/knitAndCrochet.jpg)"}/>
                    <Catagory
                        Headline={"Kids Classes and Kids Club"}
                        Description={"Discover the educational and developmental benefits of crafting in our Kids' Classes. \n" +
                         "\nWith Kids' Club® let your kids explore their creativity while you shop! Just $2 per child ages 3 and up. All supplies included."}
                        Title={"KIDS' PROGRAMS"}
                        Pic={"url(../assets/Catagories/kidsPrograms.jpg)"}/>
                </div>

                <div class="m-service-row" >
                    <Catagory
                        Headline={"Trend Classes"}
                        Description={"Be in-style and on-trend. Create what moves you in these special DIY classes focusing on the latest trends. " +
                         "Enroll now!"}
                        Title={"TREND CLASSES"}
                        Pic={"url(../assets/Catagories/TrendClasses.jpg)"}/>
                    <Catagory
                        Headline={"Birthday Parties"}
                        Description={"Birthday Parties at Michaels are now bigger and better. Choose from lots of fun, kid friendly party themes, " +
                         "or design your own custom celebration. See your local store associate to learn more and book your party."}
                        Title={"BIRTHDAY PARTIES"}
                        Pic={"url(../assets/Catagories/Birthday.jpg)"}/>
                </div>
                <MIKFooter/>
            </div>

        );


    }


    ChangeDisplayScreen(){
        console.log("Changing Display to classes");
        console.log("*** props:" + this.props.Title);
        //ServiceTypeActions.ChangeDisplayed(this.state.View);
        PagesActions.UpdateDisplayed(this.state.View);
    }




    DrawEvents(){
        console.log("*** drawing events");

        var catStyle = {
            marginLeft: 350,
            marginTop: 0,
        };

        console.log("This is the events page");

        var elementStyle = {

        };

        return (<div>

<div style={catStyle}>

    <MIKHeader/>
    <div>
        <Banner 
            Headline={"BIRTHDAY PARTIES AT MICHAELS JUST GOT BIGGER AND BETTER!"}
            Description={"Choose from lots of fun, kid-friendly party themes, or design your own custom celebration."}
            Title={"IN-STORE EVENTS"}
            View={"Events"}
            Pic={"url(../assets/SeviceTypes/partyevent.jpg)"}
            NavElenment={"Classes"}            />
</div>
        <MIKFooter/>

        </div>
        <div><Locator/></div>

        </div>);
    }

    DrawCatagories(){


        console.log("*** in DrawCategories ***");

        var varStyle = {
            marginLeft: 350,
            marginTop: 0,
        };

        console.log("This is the categories page");

        var elementStyle = {

        };

        return (<div>

            <div style={varStyle}>

            <MIKHeader/>
            <Banner 
            Headline={"This is the headline"}
            Description={"This is the Catagory discription"}
            Title={"This is the catagory"}
            View={"Catagory"}
            Pic={"url(../assets/SeviceTypes/partyevent.jpg)"}
            NavElenment={"Classes"}            />

        <MIKFooter/>

        </div>
        <div><Locator/></div>

        </div>);
    }



    // SwitchToCatagories(){
    //     // ???
    //     console.log("*** in SwitchToCatagories. Do nothing ***");
    //     //PagesActions.UpdateDisplayed();
    // }


    DrawClasses(){
        console.log("*** in DrawClasses()");

        var catStyle = {
            marginLeft: 350,
            marginTop: 0,
        };


        var elementStyle = {
            
        };

        return (<div>


        <div style={catStyle}>
            <MIKHeader/>

<div>
                <Banner 
                    Headline={"EMBRACE YOUR CREATIVITY IN 2016!"}
                    Description={"With our exciting array of classes, there's always something new to learn and do! " +
                        "Try knitting and crochet, painting, drawing, jewelry, paper crafting, " +
                        "cake decorating and more."}
                    Title={"IN-STORE CLASSES"}
                    Pic={"url(../assets/SeviceTypes/instoreclass.jpg)"}
                    View={"Classes"}            
                    NavElenment={"Events"}            
                />
</div>

            <div class="m-service-row" >
                    <Catagory
                    Headline={"Wilton® Cake Decorating"}
                    Description={"Wilton can help you master beginner baking and buttercream basics to advanced cake decorating. " +
                         "Choose from our Courses that build skills in four in-depth sessions, or try the Michaels " +
                          "EXCLUSIVE technique classes that focus on specific cake decorating techniques in a single session."}
                    Title={"WILTON CAKE DECORATING"}
                    Pic={"url(../assets/Catagories/box_wilton.jpg)"}/>

                <Catagory
                    Headline={"Grumbacher® Art Painting and Drawing Classes"}
                    Description={"Learn basic acrylic painting techniques and create your own art piece featuring landscapes, " +
                         "florals, seascapes, still-life paintings and portraits. " +
                          "No painting experience required!"}
                    Title={"ART PAINTING AND DRAWING"}
                    Pic={"url(../assets/Catagories/ArtPaintingAndDrawing.jpg)"}/>
                <Catagory
                    Headline={"Jewelry"}
                    Description={"Complete a unique jewelry piece with the guidance of our qualified instructors. " +
                         "You'll learn the latest trends, tricks and techniques for using the right tools, " +
                          "beads and findings that will bring your inspiration to life."}
                    Title={"JEWELRY MAKING"}
                    Pic={"url(../assets/Catagories/jewelry.jpg)"}/>
            </div>

            <div class="m-service-row" >
                    <Catagory
                    Headline={"Paper Crafting and Mixed Media"}
                    Description={"Join the movement to take memories off your pages and into your life. " +
                         "Sharpen your paper crafting skills, play with ink or test your favorite tools. " +
                          "No matter what you love to paper-craft, you’ll find your class in our paper crafting classes. "}
                    Title={"PAPER AND MIXED MEDIA"}
                    Pic={"url(../assets/Catagories/paperCrafting.jpg)"}/>
                <Catagory
                    Headline={"CYC Discover™Knit and Crochet Classes"}
                    Description={"Whether you want to learn how to knit or crochet or already know the basics, " +
                         "Craft Yarn Council's Discover Knit and Crochet class series offers something for everyone. " +
                          "Learn new skills by completing a fun and fashionable project with the guidance of our certified instructors."}
                    Title={"KNIT AND CROCHET"}
                    Pic={"url(../assets/Catagories/knitAndCrochet.jpg)"}/>
                <Catagory
                    Headline={"Kids Classes and Kids Club"}
                    Description={"Discover the educational and developmental benefits of crafting in our Kids' Classes. \n" +
                         "\nWith Kids' Club® let your kids explore their creativity while you shop! Just $2 per child ages 3 and up. All supplies included."}
                    Title={"KIDS' PROGRAMS"}
                    Pic={"url(../assets/Catagories/kidsPrograms.jpg)"}/>
            </div>

            <div class="m-service-row" >
                    <Catagory
                    Headline={"Trend Classes"}
                    Description={"Be in-style and on-trend. Create what moves you in these special DIY classes focusing on the latest trends. " +
                         "Enroll now!"}
                    Title={"TREND CLASSES"}
                    Pic={"url(../assets/Catagories/TrendClasses.jpg)"}/>
                <Catagory
                    Headline={"Birthday Parties"}
                    Description={"Birthday Parties at Michaels are now bigger and better. Choose from lots of fun, kid friendly party themes, " +
                         "or design your own custom celebration. See your local store associate to learn more and book your party."}
                    Title={"BIRTHDAY PARTIES"}
                    Pic={"url(../assets/Catagories/Birthday.jpg)"}/>
            </div>
    <MIKFooter/>

</div>
            <div><Locator country={this.props.params.country}/></div>

        </div>);
    }

    DrawCategoryClasses(){
        console.log("*** in DrawCategoryClasses() ***");
        var catTitle = this.state.selectedCatagory;
        // just get the first word
        // in the category to make up
        // class names
        if (catTitle === null) {
            alert('Service category is not selected');
            return;
        }
        var stmp = catTitle.split(" ");
        var tmpTitle =stmp[0];
        console.log("tmpTitle:" + tmpTitle);

        var catStyle = {
            marginLeft: 350,
            marginTop: 0,
        };


        return(
            <div style={catStyle}>
        
            <div>
                <MIKHeader/>

                <Banner 
                    Headline={"EMBRACE YOUR CREATIVITY IN 2016!"}
                    Description={"With our exciting array of classes, there's always something new to learn and do! " +
                        "Try knitting and crochet, painting, drawing, jewelry, paper crafting, " +
                        "cake decorating and more."}
                    Title={"IN-STORE CLASSES"}
                    Pic={"url(../assets/SeviceTypes/instoreclass.jpg)"}
                    View={"Classes"}            
                    NavElenment={"Classes"} />

                <div class="m-service-row" >
                    <Service
                        Headline={"Class 1"}
                        Description={"Wilton can help you master beginner baking and buttercream basics to advanced cake decorating. " +
                         "Choose from our Courses that build skills in four in-depth sessions, or try the Michaels " +
                          "EXCLUSIVE technique classes that focus on specific cake decorating techniques in a single session."}
                        Title={tmpTitle + " 1" }
                        Pic={"url(../assets/Catagories/box_wilton.jpg)"}/>
                    <Service
                        Headline={"Class 2"}
                        Description={"Learn basic acrylic painting techniques and create your own art piece featuring landscapes, " +
                         "florals, seascapes, still-life paintings and portraits. " +
                          "No painting experience required!"}
                        Title={tmpTitle + " 2"}
                        Pic={"url(../assets/Catagories/ArtPaintingAndDrawing.jpg)"}/>
                    <Service
                        Headline={"Class 3"}
                        Description={"Complete a unique jewelry piece with the guidance of our qualified instructors. " +
                         "You'll learn the latest trends, tricks and techniques for using the right tools, " +
                          "beads and findings that will bring your inspiration to life."}
                        Title={tmpTitle + " 3"}
                        Pic={"url(../assets/Catagories/jewelry.jpg)"}/>
                </div>

                <div class="m-service-row" >
                    <Service
                        Headline={"Class 4"}
                        Description={"Join the movement to take memories off your pages and into your life. " +
                         "Sharpen your paper crafting skills, play with ink or test your favorite tools. " +
                          "No matter what you love to paper-craft, you’ll find your class in our paper crafting classes. "}
                        Title={tmpTitle + " 4"}
                        Pic={"url(../assets/Catagories/paperCrafting.jpg)"}/>
                    <Service
                        Headline={"Class 5"}
                        Description={"Whether you want to learn how to knit or crochet or already know the basics, " +
                         "Craft Yarn Council's Discover Knit and Crochet class series offers something for everyone. " +
                          "Learn new skills by completing a fun and fashionable project with the guidance of our certified instructors."}
                        Title={tmpTitle + " 5"}
                        Pic={"url(../assets/Catagories/knitAndCrochet.jpg)"}/>
                    <Service
                        Headline={"Class 6"}
                        Description={"Discover the educational and developmental benefits of crafting in our Kids' Classes. \n" +
                         "\nWith Kids' Club® let your kids explore their creativity while you shop! Just $2 per child ages 3 and up. All supplies included."}
                        Title={tmpTitle + " 6"}
                        Pic={"url(../assets/Catagories/kidsPrograms.jpg)"}/>
                </div>

                <div class="m-service-row" >
                    <Catagory
                        Headline={"Class 7"}
                        Description={"Be in-style and on-trend. Create what moves you in these special DIY classes focusing on the latest trends. " +
                         "Enroll now!"}
                        Title={tmpTitle + " 7"}
                        Pic={"url(../assets/Catagories/TrendClasses.jpg)"}/>
                    <Catagory
                        Headline={"Class 8"}
                        Description={"Birthday Parties at Michaels are now bigger and better. Choose from lots of fun, kid friendly party themes, " +
                         "or design your own custom celebration. See your local store associate to learn more and book your party."}
                        Title={tmpTitle + " 8"}
                        Pic={"url(../assets/Catagories/Birthday.jpg)"}/>

                </div>
                <MIKFooter/>

            </div>
            <div><Locator country={this.props.params.country}/></div>

        </div>
        );


    }


    DrawBooking(){


return(
    <div>
        <div><MIKHeader/></div>
        <div><Booking/></div>
        <div><MIKFooter/></div>
    </div>

);

    }

    UpdateScreen(){



        console.log("*** in UpdateScreen - this.state.viewing: " + this.state.viewing);

        //var Landing = this.DrawLanding();
        //var ClassDraw = this.DrawClasses();
        //var EventDraw = this.DrawEvents();
        //var CatagoryDraw = this.DrawCatagories();
        //var CategoryClassesDraw = this.DrawCategoryClasses();

        //var BookingDraw= this.DrawBooking();


        //console.log("Updating screen. state.viewing:" + this.state.viewing);
        
        switch (this.state.viewing) {
            case "Landing":
                this.setState({page: this.DrawLanding()});
                break;
            case "Classes":
                this.setState({page: this.DrawClasses()});
                break;
            case "Events":
                this.setState({page: this.DrawEvents()});
                break;
            case "Catagories":
                this.setState({page: this.CatagoryDraw()});
                break;
            case "CategoryClasses":
                this.setState({page: this.DrawCategoryClasses()});
                break;
            case "Booking":    
                this.setState({page: this.DrawBooking()});
                break;
            default:
                alert("viewing: " + this.state.viewing + " is not handled");

        }


    }


    /*DrawBooking(){
return(
        <Row >

            <Col sm={3} md={3} lg={3}>
  /!*              <Panel>
                    <Row>
                        {condition ?
                            <div>
                                <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                                          placeholder={placeHolderValue}/>
                                <p/><p/>
                                {selctedLanguage ?
                                    <h3>This website is in english</h3>
                                    :
                                    <h3>Ce site est en français</h3>
                                }
                            </div>
                            : <div><h1>This is the US Site in english</h1></div>
                        }
                    </Row>
                    <Row>

                        <Locator country={params.country}/>

                    </Row>
                </Panel>
            </Col>

            <Col sm={6} md={6} lg={6}>*!/



            </Col>
        </Row>


    );

    }*/












  render() {

      const {params} = this.props;


      //console.log(this.state)
      console.log(">>>In ClassesAndEvent.render(). state:" + this.state);

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

      var ShownPage = this.state.isBooking;




      return (<body>{this.state.page}</body>);
  }






}
