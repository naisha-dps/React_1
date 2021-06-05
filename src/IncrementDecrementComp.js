import React, { Component } from 'react'

export default class IncrementDecrementComp extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            count: 0
        };
    }
    incrementState = () => {
        var count = this.state.count;
        console.log(count)
        count = count  + 1
        this.setState({"count":count});
    }
    decrementState = () => {
        var count = this.state.count;
        console.log(count)
        count = count  - 1
        this.setState({"count":count});
    }
    render() {
        return (
            <div>
           <h2> Count : {this.state.count} </h2>
                        <br></br>
                        <button onClick = {this.incrementState}>Increment</button>
                        <button onClick = {this.decrementState}>Decrement</button>
            </div>
        )
    }
}
