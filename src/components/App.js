import React from 'react';
import {handleInitData} from '../actions/shared'
import {connect} from 'react-redux'

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handleInitData())
  }
  render(){
    return (
      <div>
        Hello World
      </div>
    )
  }
}




export default connect()(App);
