import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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



function mapStateToProps({ users, authedUser, questions }) {
    const userIDs = Object.keys(users)
    var AllUsers = []
    userIDs.map((id) => {



        const userID = id
        const keys = Object.keys(questions)
        var numQuesitons = 0, numAnswers = 0
        keys.map((key) => {
            const votes1 = questions[key].optionOne.votes
            const votes2 = questions[key].optionTwo.votes
            const author = questions[key].author
            if (author === userID) {
                console.log('🍗🍗🍗🍗🍗 The properties: quesiton')
                numQuesitons = numQuesitons + 1
            }
            if (votes1.includes(userID) || votes2.includes(userID)) {
                console.log('🍗🍗🍗🍗🍗 The properties: answer')
                numAnswers = numAnswers + 1
            }


        })

        AllUsers.push({
            ...users[id],
            sum: numAnswers + numAnswers,
           numQuesitons,
           numAnswers

        })
    })
    AllUsers.sort((a, b, ) => b.sum - a.sum)


    return {
        users: AllUsers,
        authedUser

    }
}

export default connect(mapStateToProps)(LeaderBoard)