import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect, Link} from 'react-router-dom'
import Home from './Home'

class Login extends Component {    
    selectedUserId = 0
   
    handleSelectUserChange = (e) => {
       this.selectedUserId = e.target.value
    }

    handleLogin = (e)=> {
        console.log(this.selectedUserId)
        this.props.dispatch (setAuthedUser(this.selectedUserId))
   }
    render() {
        const { usersIds, users, authedUser } = this.props

        if (authedUser !== null){
            return <Redirect to='/home'/>
        }

        return (
            
            <div>
               <Link to='/Leaderboard'>Hello</Link>
                <select onChange={this.handleSelectUserChange}>
                    {
                        usersIds.map((id) => (
                            <option key={id} value={id}>{users[id].name}</option>
                        ))
                    }
                </select>
                <button onClick={this.handleLogin}>Login</button>
            </div>
            
        )
    }
}


function mapStateToProps({ users , authedUser}) {
    return {
        usersIds: Object.keys(users),
        users: users, 
        authedUser: authedUser
    }
}
export default connect(mapStateToProps)(Login)