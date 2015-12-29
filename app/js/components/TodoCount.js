import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
  	let message = ''
  	if(this.props.count == 0){
  		message = "You are done!"
  	} else {
  		message = `${this.props.count} more to go for today!` 
  	}

    return (
      <span className="b-todo-count">
      	{message}
      </span>
    )
  }
}

Todo.propTypes = {
  count: PropTypes.number.isRequired
}
