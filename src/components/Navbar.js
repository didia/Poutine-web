/**
 * Created by mohamed on 2016-06-18.
 */
import React from 'react'
import Login from './Login'
import { loginUser } from '../actions/authentication'

export default class Navbar extends React.Component {

    render() {
        const { dispatch,
                isAuthenticated,
                errorMessage } = this.props

        return(
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <a className="navbar-brand" href="#">Tobima</a>
                    <div className='navbar-form'>
                        {!isAuthenticated &&
                            <Login
                                errorMessage = { errorMessage }
                                onLoginClick = { userInfo => dispatch(loginUser(userInfo)) }
                            />
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    dispatch       : React.PropTypes.func.isRequired,
    errorMessage   : React.PropTypes.string
}