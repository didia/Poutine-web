/**
 * Created by mohamed on 2016-06-11.
 */
import fetch from 'isomorphic-fetch'
import * as authenticationActionsTypes from './authenticationActionsTypes'

export function requestLogin(userInformations) {
    return {
        type: authenticationActionsTypes.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        userInformations
    }
}

export function receiveLogin(user) {
    return {
        type: authenticationActionsTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        idToken: user.idToken
    }
}

export function loginError(message) {
    return {
        type: authenticationActionsTypes.LONGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function loginFetch(userInformations) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${userInformations.username}&password=${userInformations.password}`
    }

    return dispatch => {
        dispatch(requestLogin(userInformations))

        return fetch('http://localhost:3001/sessions/create', config)
            .then(response => response.json().then(user => ({user, response}))
                ).then(({user, response}) => {
                if(!response.ok) {
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else {
                    localStorage.setItem('id_token', user.idToken)
                    dispatch(receiveLogin(user))
                }
            }).catch(err => console.log("Error", err))
    }
}