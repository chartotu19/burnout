/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const UPDATE_TIME = 'UPDATE_TIME'

export const UPDATE_BEDTIME = 'UPDATE_BEDTIME'
export const UPDATE_BGCOLOR = 'UPDATE_BGCOLOR'
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
/*
 * other constants
 */

export const DEFAULT_TIME = new Date()

export const COLORS  = ['#AA3939','#003259','#113939']

export const DEFAULT_SETTINGS = {
  bedTime : '23:00:00',
  bgColor : '#AA3939'
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */


export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
    text
  };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function updateSettings(settings){
  return {type : UPDATE_SETTINGS, settings}
}

export function updateTime(time){
	return {type: UPDATE_TIME, time}
}