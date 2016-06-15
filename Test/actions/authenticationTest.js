/**
 * Created by mohamed on 2016-06-11.
 */
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as action from '../../src/actions/authentication'
import * as actionType from '../../src/actions/authenticationActionsTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Authentication_Actions_Tests', () => {

    afterEach(() => {
        nock.cleanAll()
    })

    it('should create an action RequestLogin', () => {
        const userInformations           = { username: "mocho17", password: "testpassword"}
        const expectedRequestLoginAction = { type: actionType.LOGIN_REQUEST, isFetching: true, isAuthenticated: false, userInformations }

        expect(action.requestLogin(userInformations)).toEqual(expectedRequestLoginAction)
    })

    it('should create an action ReceiveLogin', () => {
        const user                       = { firstName: "mohamed", lastName: "chouchane", idToken: "4g1e|nAaPcv0.Np6<'?.0Y]-d4~v;X"}
        const expectedReceiveLoginAction = { type: actionType.LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, idToken: "4g1e|nAaPcv0.Np6<'?.0Y]-d4~v;X" }

        expect(action.receiveLogin(user)).toEqual(expectedReceiveLoginAction)
    })

    it('should create an action LoginError', () => {
        const message = "Login error message."
        const expectedLoginErrorAction = { type: actionType.LONGIN_FAILURE, isFetching: false, isAuthenticated: false, message }

        expect(action.loginError(message)).toEqual(expectedLoginErrorAction)
    })

    /*it('should create an action FetchUser', () => {
        nock('http://localhost:3001/')
        .post('/sessions/create')
        .reply(200, {idToken: {}})

        const userInformations = { username: "mocho17", password: "testpassword"}
        const expectedActions  = [ {type: actionType.LOGIN_REQUEST, isFetching: true, isAuthenticated: false, userInformations},
                                   {type: actionType.LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, idToken: {}} ]
        const store            = mockStore({ idToken: {} })

        return store.dispatch(action.loginFetch(userInformations))
            .then(() => {
                 expect(store.getActions()).toEqual(expectedActions)
            })
    })*/
})