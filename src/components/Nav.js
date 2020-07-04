import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

import { Link, Redirect, NavLink } from 'react-router-dom'

class Nav extends Component {
    handleLogout = (e) => {
        this.props.dispatch(setAuthedUser(null,''))
    }

    render() {
        const { authedUser } = this.props
        
        return (
            <div >

                <div style={{marginTop:20}}>
                    <NavLink to='/NewQuestion' className='btn-nav'>New Question</NavLink>
                    <NavLink to='/Leaderboard' className='btn-nav'>Leaderboard</NavLink>
                    <button onClick={this.handleLogout} className='btn-logout'>Logout</button>
                    <img src={authedUser.imageURL} style={styles.avatarImage}></img>
                </div>
                


                <div>{authedUser.id}</div>
            </div>

        )
    }
}

function mapStateToProps({ users,authedUser , state }) {
    console.log('👩🏻‍🏭 users: ' + state)
    console.log('🥭 authed user: ' + authedUser.imageURL)
    
    return {
        authedUser
    }
}

const styles = {
    avatarImage:{
        width:30,
        height:30,
        float:'right'
    }
}

export default connect(mapStateToProps)(Nav)