function posts(state = [], action){
	console.log(action, state)
	switch(action.type){
		case 'INCREMENT_LIKES':
			console.log("Incrementing Likes.")
			const index = action.index;
			return [
			  ...state.slice(0, index), //before the one we are updating
				{...state[index], likes: state[index].likes + 1},
				...state.slice(index + 1) // after the one we are updating
			]
		default:
			return state

	}
}

export default posts;
