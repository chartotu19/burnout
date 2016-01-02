import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, updateTime, updateSettings, setVisibilityFilter, VisibilityFilters, COLORS } from '../actions'

import Timer from '../components/Timer'
import Settings from '../components/Settings'
import TodoCount from '../components/TodoCount'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import Footer from '../components/Footer'
import timediff from 'timediff'


class App extends Component {
	
	componentDidMount(){
		const { dispatch } = this.props
    	setInterval( ()=> { dispatch(updateTime(new Date()))} , 1000)
    }

 	render() {
    	// Injected by connect() call:
    	const { dispatch, visibleTodos, visibilityFilter, time, count } = this.props

    	return (
    	<div className="row">
			<div className="col-sm-6 col-xs-6 b-row b-center ptop ">
				<Timer time={time}/>
				<Settings 
					colors={COLORS}
					onSaveClick={ (settings) => 
						dispatch(updateSettings(settings))
				}/>
			</div>
			<div className="col-sm-6 col-xs-6 b-row b-center ptop ">
				<TodoCount
					count={count}
				/>
				<AddTodo
	          		onAddClick={text =>
	            	dispatch(addTodo(text))
	          	} />
				<TodoList 
					todos={visibleTodos} 
					onTodoClick={id => 
					dispatch(completeTodo(id))
				}/>
				<Footer
		          filter={visibilityFilter}
		          onFilterChange={nextFilter =>
		            dispatch(setVisibilityFilter(nextFilter))
		        } />
			</div>

		</div>
    	)
  	}
}

App.propTypes = {
	time : PropTypes.shape({
		hours : PropTypes.string.isRequired,
		minutes : PropTypes.string.isRequired,
		seconds : PropTypes.string.isRequired
	}),
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	visibilityFilter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
	}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function computeCount(todos){
	let t = todos.filter(todo=> !todo.completed)
	return t.length
}

function getCountdownTime(currentTime,bedTime){
	let d = new Date()
	bedTime = new Date(d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+bedTime)
	//currentTime = new Date(d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+currentTime)
	let diff = timediff(currentTime,bedTime)
	return  {
		hours : ("0"+diff.hours).slice(-2),
		minutes: ("0"+diff.minutes).slice(-2),
		seconds : ("0"+diff.seconds).slice(-2)
	}
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
  	time : getCountdownTime(state.time, state.settings.bedTime),//state.timer,
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    count : computeCount(state.todos)
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)