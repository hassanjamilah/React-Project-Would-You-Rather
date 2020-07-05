import React , {Component} from 'react'
import {handleAddQuestion} from '../actions/question'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Nav from './Nav'

class NewQuestion extends Component{
    state = {
        optionOneValue: '',
        optionTwoValue: '',
        toHome: false,
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
        const {id} = this.props
        this.props.dispatch(handleAddQuestion(optionOneValue, optionTwoValue))
        this.setState(()=>({
            optionOneValue:'',
            optionTwoValue:'',
            toHome:  true
        }))
        
    }
    
    render(){
        const {optionOneValue, optionTwoValue} = this.state

        if (this.props.authedUser === null){
            return (<Redirect to='/'/>)
        }

        if (this.state.toHome === true){
            return (<Redirect to='/home'/>)
        }
        return(
            <div>
            <Nav/>
                <form onSubmit={this.handleSubmitForm}>
                   
                    <div>
                        <input style={styles.textInput} type='text' id='option1' onChange={this.handleChange} value={optionOneValue}/>
                    </div>
                    <div>
                        <input style={styles.textInput} type='text' id='option2' onChange={this.handleChange} value={optionTwoValue}/>
                    </div>
                    
                    <button  style= {styles.submitButton} type='submit' disabled={optionOneValue==='' || optionTwoValue ===''}>Submit</button>
                </form>
            </div>
        )
    }
}

const styles = {
    textInput:{
        margin:10,
        height:20,
        width:'50%'
    },
    submitButton:{
        margin:10,
        width:75,
        height:30,
    }
}

function mapStateToProps({authedUser}){
   return {
       authedUser
   }
}

export default connect(mapStateToProps)(NewQuestion)