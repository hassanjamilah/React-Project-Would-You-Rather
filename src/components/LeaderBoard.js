import React , {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'
class LeaderBoard extends Component{
    render(){
        const {users} = this.props
        console.log('The whole users are: ' , this.props.users)
        return (
            <div>
            {
                users.map((user)=>(
                    <User user={user}/>
                ))
            }
               
            </div>
        )
    }
}



function mapStateToProps({users}){
    const userIDs = Object.keys(users)
    var AllUsers = []
    userIDs.map((id)=>{
        const allAnswers = Object.keys(users[id].answers)
        const allQuestions = users[id].questions
        AllUsers.push({
            ...users[id],
            sum:allQuestions.length + allAnswers.length

        })
    })
    AllUsers.sort((a,b,)=>b.sum - a.sum)

    
    return {
        users: AllUsers
       
    }
}

export default connect(mapStateToProps)(LeaderBoard)