import React from 'react'

export default class Temp extends React.Component{
    state={
        firstSelected:true
    }

    radioSelected = (value)=>{
        var newValue = false
        value == 1 ? newValue = true : newValue = false
        this.setState(()=>({
            firstSelected:newValue
        }))
    }

    render(){
        const {firstSelected} = this.state
        return(
            <div>
                <input type='radio' 
                onChange={()=>this.radioSelected(1)}
                checked={firstSelected}></input>
                <input type='radio' 
                onChange={()=>this.radioSelected(2)}
                checked={!firstSelected}></input>
            </div>
        )
    }
}