function postComments(state = [], action){
	switch(action.type) {
		case 'ADD_COMMENT':
			//return new state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			console.log("Removing comment")
			return [
				//from the start to the one we want to delete
				...state.slice(0, action.index),
				//after the deleted one to the end
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
	return state;
}

function comments(state = [], action){
	if (typeof action.postId !== 'undefined'){
		return {
			...state, //current state
			[action.postId]: postComments(state[action.postId], action) //Overwrite old post with new one
		}
	}
	return state;
}

export default comments;
