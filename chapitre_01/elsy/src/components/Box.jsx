import React from "react";
// import App from "./src/App";

class Box extends React.Component {

    constructor(){
        super()
        this.state = {
          changeValue: ''
        }
      } 

      handleInput(e){ 
        this.setState({ changeValue: e.target.value })
      }

      

    render() {
        
        console.log(this.onHeartChange);
   
        const handleSlider = () => {

            if (this.props.unit === "L") {
                return <input type="range" min={0} max={5000} value={this.state.changeValue} onInput={this.handleInput.bind(this)}/>
                
            }
            else if(this.props.unit === "steps") {
                return <input type="range" min={0} max={50000} value={this.state.changeValue} onInput={this.handleInput.bind(this)}/>
                
            }
            else if (this.props.unit === "bpm") {
                return <input type="range" min={this.props.heartMin} max={this.props.heartMax} value={this.state.changeValue} onInput={this.handleInput.bind(this)} />

            }
            else if (this.props.unit === "°c") {
                return <input type="range" min={-20} max={40} value={this.state.changeValue} onInput={this.handleInput.bind(this)} />
               
            }

        }
    
        return (
            <div className="box col-sm-3 col-6">

                
                <span className="material-icons" style={{fontSize:100, color : this.props.color }} >
                    {this.props.icon}
                </span>
                
               
                <p> {this.props.count} { this.state.changeValue } {this.props.unit}</p>
                <div>{handleSlider()}</div>
                
               
              
               
            </div>

        )


    };
}

export default Box;