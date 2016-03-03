import * as ACTION_TYPES from '../constants/ActionTypes';

const initialState = {
	authData : {}
};

export default function (currentState = initialState, action) {
	switch(action.type){
		case ACTION_TYPES.ATTEMPTING_LOGIN:
			return {
				authData : action.authData
			};
		break;
		default:
			return currentState;
	}
}