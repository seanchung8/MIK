import React from "react";
import {Link} from "react-router"

export default class Layout extends React.Component {


    navigate(){
        this.props.history.replaceState(null,"/")
    }
  render() {
      

    return (
      <div>

          
          {this.props.children}
          
          

       
            <Link to="classesandevents/US"><button >Go to Michaels USA</button></Link>
            <Link to="classesandevents/CA"><button>Go to Michaels Canada</button></Link>
            <Link to="Confirmation/CA"><button>Go to Confirmation Canada</button></Link>
            <Link to="Confirmation/US"><button>Go to Confirmation USA</button></Link>

      </div>
    );
  }
}
