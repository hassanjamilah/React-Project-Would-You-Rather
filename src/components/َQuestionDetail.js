import React from 'react'
import { connect } from 'react-redux'
import { handleToggleAnswer } from '../actions/question'
import { Redirect } from 'react-router-dom'

class QuestionDetail extends React.Component {
    state = {
        selecteOption: 'option1'
    }

    handleSumbit = (e) => {
        e.preventDefault()
        const { id, authedUser } = this.props
        this.props.dispatch(handleToggleAnswer(id, 'optionOne'))

    }

    checkIfIsAnsweredQuestion = () => {

    }

    handleChangeOption = (value) => {
       
        this.setState(()=>({
            selecteOption:value
        }))
    }

    render() {
        const { id, isAnswered } = this.props
        if (this.props.authedUser === null) {
            return (<Redirect to='/' />)
        }
        console.log("The quesiton is answered: ", this.checkIfIsAnsweredQuestion())
        if (isAnswered == null) {
            return (

                <div >{id}
                    <label>
                        <input type="radio" value="option1" 
                        checked={this.state.selecteOption === 'option1'}
                        onChange={ this.handleChangeOption('option1')}/>
                        Option 1
                     </label>
                     <label>
                        <input type="radio" value="option2" 

                        checked={this.state.selecteOption === 'option2'}
                        onChange={this.handleChangeOption('option2')}
                        />
                        
                        Option 2
                     </label>
                    <button onClick={this.handleSumbit}>Submit answer</button>
                </div>

            )
        } else {
            return (

                <div >{id}

                    <div>{isAnswered}</div>
                </div>


            )
        }

    }
}

function MapStateToProps({ users, questions, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]
    var x = null
    if (authedUser !== null) {
        x = users[authedUser].answers[id]
    }



    return {
        id,
        authedUser,
        question: question,
        users,
        isAnswered: x

    }

}

export default connect(MapStateToProps)(QuestionDetail)