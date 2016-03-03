import * as ACTION_TYPES from '../constants/ActionTypes'
import { APP_URL } from '../constants/FirebaseConfig';
import Firebase from 'firebase';

var ref = new Firebase(APP_URL);

export function startListeningToAuth( dispatch, getState ) {
	ref.authWithOAuthPopup('facebook', function(error, authData) {
		if(error){

		}else{
			dispatch({
				type : ACTION_TYPES.GETTING_AUTH,
				authData : authData
			});
		}
	}, {
		remember: 'sessionOnly',
		scope: 'public_profile'
	});
}

export function attemptLogin( dispatch, getState ) {

}

export function logout ( dispatch, getState ){
	dispatch({type:ACTION_TYPES.LOGOUT});
	ref.unauth();
}