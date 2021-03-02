import React from 'react';  
import './popupStyle.css';  

class Popup extends React.Component {  
  render() {  
    console.log("in popup", this.props.url);
    return (  
    <div className='popup'>  
    <div className='popup\_inner'>  
    {/* <h1>{this.props.text}</h1>   */}
    <img src = {this.props.url}></img>  
    <button onClick={this.props.toggleDisplay}>close me</button>  
    </div>  
    </div>  
    );  
  }  
}  

export default Popup;