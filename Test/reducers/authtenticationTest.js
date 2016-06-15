/**
 * Created by mohamed on 2016-06-13.
 */
import expect from 'expect'
import * as authenticationAction from '../../src/actions/authenticationActionsTypes'
import { authentication } from '../../src/reducers/authentication'

describe('Authentication_Redurcer_Tests', () => {
    it('Should return new state for LOGIN_REQUEST.', function() {
        const state    = { isFetching: false, isAuthenticated: false }
        const action   = { type: authenticationAction.LOGIN_REQUEST , userInformations: {username: 'mocho17', password: '1234'} }
        const newState = { isFetching: true, isAuthenticated: false, userInformations: action.userInformations }

        expect(authentication(state, action)).toEqual(newState)
    })

    it('Should return new state for LOGIN_SUCCES.', function() {
        const user     = { username: 'mocho17', password: '1234' }
        const state    = { isFetching: true, isAuthenticated: false, userInformations: user }
        const action   = { type: authenticationAction.LOGIN_SUCCESS }
        const newState = { isFetching: false, isAuthenticated: true, userInformations: user }

        expect(authentication(state, action)).toEqual(newState)
    })

    it('Should return new state for LOGIN_FAILURE.', function() {
        const state    = { isFetching: false, isAuthenticated: false }
        const action   = { type: authenticationAction.LONGIN_FAILURE, message: "Login failure." }
        const newState = { isFetching: false, isAuthenticated: false, errorMessage: action.message }

        expect(authentication(state, action)).toEqual(newState)
    })
})
