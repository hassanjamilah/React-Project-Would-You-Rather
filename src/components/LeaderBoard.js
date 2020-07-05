import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import User from './User'
import Nav from './Nav'
class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        console.log('The whole users are: ', this.props.users)
        //Kick out if the user is not logged in
        if (this.props.authedUser === null) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                <Nav />
                {
                    <ul>
                        {
                            users.map((user) => (
                                <li key={user.id}><User user={user} /></li>
                            ))
                        }
                    </ul>
                }
            </div>
        )
    }
}



function mapStateToProps({ users, authedUser }) {
    const userIDs = Object.keys(users)
    var AllUsers = []
    userIDs.map((id) => {
        const allAnswers = Object.keys(users[id].answers)
        const allQuestions = users[id].questions
        AllUsers.push({
            ...users[id],
            sum: allQuestions.length + allAnswers.length

        })
    })
    AllUsers.sort((a, b, ) => b.sum - a.sum)


    return {
        users: AllUsers,
        authedUser

    }
}

export default connect(mapStateToProps)(LeaderBoard)