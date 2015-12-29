import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, UPDATE_TIME, UPDATE_BEDTIME, DEFAULT_TIME, DEFAULT_BEDTIME, VisibilityFilters } from './actions';
const {SHOW_ACTIVE } = VisibilityFilters;
import timediff from 'timediff';


function time(state=DEFAULT_TIME,action){
	switch (action.type) {
		case UPDATE_TIME:
			let d = new Date()

			let bedtime = new Date(d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' 23:30:30')
			let diff = timediff(action.time,bedtime);

			//console.log(diff);
			return  {
				hours : ("0"+diff.hours).slice(-2),
				minutes: ("0"+diff.minutes).slice(-2),
				seconds : ("0"+diff.seconds).slice(-2)
			}
		default: 
			return state;
	}
}

function visibilityFilter(state=SHOW_ACTIVE, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER : 
			return action.filter
		default:
			return state
	}
}

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case COMPLETE_TODO:
      if (state.id !== action.id) {
        return state
      }
      
      state.completed = state.completed == true ? false : true;
      return state;
      
      /*return {
        ...state,
        completed: true
      }*/
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case COMPLETE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

function settings(state=DEFAULT_BEDTIME, action){
	switch (action.type) {
		case UPDATE_BEDTIME:
			state.bedTime = `${action.hours}:{action.minutes}:${action.seconds}`
			//action.hours+':'+action.minutes+':'+action.seconds
			//`${action.hours}:{action.minutes}:${action.seconds}`
			return state
		default:
			return state
	}
}

function burnoutApp(state={}, action){
	settings = settings(state.settings, action);
	time = time(state.time, action, state.settings);

	return { settings, time}
}


const todoApp = combineReducers({
	visibilityFilter,
	todos,
	time
})

export default todoApp