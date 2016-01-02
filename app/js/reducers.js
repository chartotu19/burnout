import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, UPDATE_TIME, UPDATE_BEDTIME, UPDATE_BGCOLOR,UPDATE_SETTINGS } from './actions';
import {DEFAULT_TIME, DEFAULT_SETTINGS, VisibilityFilters} from './actions';
const {SHOW_ACTIVE } = VisibilityFilters;


function settings(state=DEFAULT_SETTINGS,action){
	switch (action.type){
		case UPDATE_SETTINGS :
			if (!!action.settings['bedTime']){
				state.bedTime = action.settings.bedTime	
			} 
			if(!!action.settings['bgColor']){
				state.bgColor = action.settings.bgColor
			}
			return state
		/*case UPDATE_BGCOLOR :
			state.bgColor = action.bgColor
			return state*/
		default:
			return state
	}
}

function time(state=DEFAULT_TIME,action){
	switch (action.type) {
		case UPDATE_TIME:
			return action.time
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

function burnoutApp(state={}, action){
	settings = settings(state.settings, action);
	time = time(state.time, action, state.settings);

	return { settings, time}
}


const todoApp = combineReducers({
	visibilityFilter,
	todos,
	time,
	settings
})

export default todoApp