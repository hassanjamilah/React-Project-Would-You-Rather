import React , {Component} from 'react'
import { connect} from 'react-redux'
class User extends React.Component{
    
    render(){
        const {user} = this.props
        return (
            <div>
            <div>{user.name}</div>
            <div>{user.sum}</div>
            </div>
            
        )
    }
}

// function mapStateToProps({users, questionIDs},{id}){
//     const sumAnswers = users[id].answers.length
//     const sumQuestions = users[id].questions.length
//     const sum = sumAnswers + sumQuestions
//     return{
//         id,
//         user: users[id]
//     }
    
//     // return {
//     //     id,
//     //     users: users.sort((a,b,)=> (user[b].answers.length + users[b].questions.length)-
//     //     (user[a].answers.length + users[a].questions.length))
//     // }
// }

export default User