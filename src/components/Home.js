import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleInitQuestions} from '../actions/shared'
class Home extends Component{
 
    render(){
        const {questionsIds, questions, authedUser} = this.props
        return (
            <div>
                <ul>
                    {
                        questionsIds.map((id)=>(

                            <li>{id}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}){
    return {
        questionsIds: Object.keys(questions),
        questions: questions,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Home)