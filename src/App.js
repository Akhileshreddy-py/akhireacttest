import React,{Component} from "react";
import "./style.css";

class Ak extends Component
{
  constructor()
  { var i=1;
    super()
      this.state=
      {
        count:i
      }}
      inc()
      {
      this.setState({count:this.i++})
      }
  
  render()
  {
    return(<> <h1> {this.state.count} </h1> <button onClick={()=> this.inc()}> increment </button> </>);
  }
}
export default Ak;  
 
