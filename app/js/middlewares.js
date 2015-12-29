export const persistence = store => next => action => {
	let result = next(action)
	//console.log('Pushing state to localStorage')
	localStorage.setItem('burnout-current-state',JSON.stringify(store.getState()) )
	return result
}

