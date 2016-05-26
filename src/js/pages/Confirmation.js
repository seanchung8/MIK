import React from "react";

import AppointmentEdit from '../components/AppointmentEdit';
import MIKHeader from "../components/MIKHeader";
import MIKFooter from "../components/MIKFooter";

export default class Confirmation extends React.Component {

  render() {

    return (
      <div>
        <MIKHeader/>
        <AppointmentEdit/>
        <MIKFooter/>
      </div>
    );
  }
}
