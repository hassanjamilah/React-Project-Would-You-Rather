import React , {Component} from 'react'
import {handleAddQuestion} from '../actions/question'
import {connect} from 'react-redux'

class NewQuestion extends Component{
    state = {
        optionOneValue: '',
        optionTwoValue: ''
    }

    handleChange = (e) => {
        const optionOneValue = document.getElementById('option1').value
        const optionTwoValue = document.getElementById('option2').value
        console.log('values' , optionOneValue , optionTwoValue)
        this.setState(()=>({
            optionOneValue,
            optionTwoValue
        }))
    }

    handleSubmitForm = (e) =>{
        e.preventDefault()
        const {optionOneValue, optionTwoValue} = this.state
        this.props.dispatch(handleAddQuestion(optionOneValue, optionTwoValue))
        
    }
    
    render(){
        const {optionOneValue, optionTwoValue} = this.state
        return(
            <div>
                <form onSubmit={this.handleSubmitForm}>
                   
                    <input type='text' id='option1' onChange={this.handleChange} value={optionOneValue}/>
                    <input type='text' id='option2' onChange={this.handleChange} value={optionTwoValue}/>
                    <button type='submit' disabled={optionOneValue==='' || optionTwoValue ===''}>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)