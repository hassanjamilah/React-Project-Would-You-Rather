import React , {Component} from 'react'
import {connect} from 'react-redux'
class Login extends Component{
    componentDidMount(){

    }
    render(){
        const {usersIds,users} = this.props

        return(
            <div>
               <select>
                  {
                      usersIds.map((id)=>(
                          <option key={id} value= {users[id].name}>{users[id].name}</option>
                            
                         
                      ))
                  }
               </select>
            </div>
        )
    }
}


function mapStateToProps({users}){
    // const ids = Object.keys(users)
    // ids.map((id)=>{
    //     console.log(users[id].name)
    // })
    return{
      usersIds: Object.keys(users),
      users: users
    }
  }
export default connect(mapStateToProps)(Login)