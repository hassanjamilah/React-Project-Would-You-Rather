import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
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
        const { usersIds, users } = this.props

        return (
            <div>
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


function mapStateToProps({ users }) {
    return {
        usersIds: Object.keys(users),
        users: users
    }
}
export default connect(mapStateToProps)(Login)