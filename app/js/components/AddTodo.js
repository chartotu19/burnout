import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  render() {
    let style = {
      padding:'8px',
      color:'#AA3939'
    }
    return (
      <div>
        <input style={style} type='text' ref='input' />
        <button className="b-cta p10 ml10" onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    if (!!text) {
      this.props.onAddClick(text)
      node.value = ''
    }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}