import React from "react";


export default class Layout extends React.Component {


  render() {

    var buttonStyle = {
      textAlign: 'center',
      color: 'Red',
      align: 'center'
    };

    var elementAlign = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={elementAlign}>
        <button id="usa" style={buttonStyle}> Michaels USA Classes </button>
        <button> Michaels Canada Classes  </button>
      </div>
    );
  }
}
