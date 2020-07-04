import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

import { Link, Redirect, NavLink } from 'react-router-dom'

class Nav extends Component {
    handleLogout = (e) => {
        this.props.dispatch(setAuthedUser(null, ''))
    }

    render() {
        const { authedUser, user } = this.props
        console.log('🍱  users in nav: ' , user)

        return (
            <div >

                <div style={{ marginTop: 20 }}>
                    <NavLink to='/NewQuestion' className='btn-nav'>New Question</NavLink>
                    <NavLink to='/Leaderboard' className='btn-nav'>Leaderboard</NavLink>
                    <button onClick={this.handleLogout} className='btn-logout'>Logout</button>
                    <img src={user.avatarURL} style={styles.avatarImage}></img>
                    <span style={styles.HelloText}>{'Hello, ' + user.name}</span>
                </div>
            </div>

        )
    }
}

function mapStateToProps({ users, authedUser, state }) {
    console.log('👩🏻‍🏭 users: ' + state)
    

    return {
        authedUser,
        user:users[authedUser.id]
    }
}

const styles = {
    avatarImage: {
        width: 30,
        height: 30,
        float: 'right'
    },
    HelloText: {
        float: 'right',
        verticalAlign: 'center',
        marginTop: 5

    }
}

export default connect(mapStateToProps)(Nav)