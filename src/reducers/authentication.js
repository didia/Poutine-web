/**
 * Created by mohamed on 2016-06-05.
 */
import * as authenticationActions from '../actions/authenticationActionsTypes.js'

export function authentication(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false }, action = null) {

    switch (action.type) {
        case authenticationActions.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                userInformations: action.userInformations
            })
        case authenticationActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true
            })
        case authenticationActions.LONGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        default:
            return state
    }
}