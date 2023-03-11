import React,{Component} from "react"
import "./App.css"
class Contador extends Component {
  state={
    conte: 0,
  }
  somar =() =>{
    if(this.state.conte <10){
      this.setState({conte: this.state.conte +1})
    }
    
  }
  menos =() =>{
    if(this.state.conte >0){
    this.setState({conte: this.state.conte -1})
  }
  }
  render(){
    return(
     <section>
        <h1>CONTADOR</h1>
        <h2>{this.state.conte}</h2>
        <div>
        <button onClick={this.menos}>-</button>
        <button onClick={this.somar}>+</button>
        </div>
        </section>
    )
  }
}
export default Contador
