import React from 'react'
import { connect } from 'react-redux'
import { handleToggleAnswer } from '../actions/question'
import { Redirect } from 'react-router-dom'
import {RadioGroup, Radio} from 'react-radio-group'

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

    handleChangeOption = (e) => {
        console.log('event', e)
        this.setState(()=>({
            selecteOption:e.target.value
        }))
    }

    handleCahnge1 = (e) => {
        console.log(e)
    }

    render() {
        const { id, isAnswered } = this.props
        if (this.props.authedUser == null) {
            return (<Redirect to='/' />)
        }
        console.log("The quesiton is answered: ", this.checkIfIsAnsweredQuestion())
        if (isAnswered == null) {
            return (

                <div >{id}
                    <form>
                        <RadioGroup selectedValue='option1' onchange={this.handleCahnge1}>
                        <Radio value='option1' checked={false}>Option1</Radio>
                        </RadioGroup>
                        <button onClick={this.handleSumbit}>Submit answer</button>
                    </form>
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
    console.log('🍫 authed user in q details: ' , users[authedUser.id])
    if (authedUser !== null) {
        x = users[authedUser.id].answers[id]
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