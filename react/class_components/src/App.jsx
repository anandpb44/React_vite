import { Component } from "react";

// class Components extends Component{
//   constructor(props){
//     super()
//     console.log(props);
    
//     this.state={
//       data : "react components Work",
//       a : props.a,
//       b : props.b
//     }
//   }
//   render(){
//     return(
//       <div>
//       <h1>{this.state.data}</h1>
//       <h2>{this.state.a}</h2>
//       <h2>{this.state.b}</h2>
//       </div>
//     )
//   }
// }

class Components extends Component{
  constructor(props){
    super()
    this.state={
     count :props.start || 0
    }
  }
  increment=()=>{
    this.setState((prv)=>({count:prv.count+1}))
  }
  decrement=()=>{
  //   this.setState((prv)=>{
  //     if(prv.count>0){
  //       return {count:prv.count-1};
  //     }
  //     return null;
  // });
  this.setState((prv)=>(prv.count>0 && {count:prv.count-1}))
  // this.setState((prv)=>(prv.count>0 && {count:prv.count>0 ? prv.count-1:0}))

  }
  render(){
    return(
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Components

