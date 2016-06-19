/**
 * Created by mohamed on 2016-06-18.
 */
import React from 'react'

export default class Login extends React.Component {

    render() {
        const { errorMessage } = this.props

        return(
            <div>
                <input type='text' ref='username' className="form-control" placeholder='Username' />
                <input type='password' ref='password' className="form-control" placeholder='Password' />

                <button onClick={(event) => this.handleClick(event) } className="btn btn-primary">
                    Login
                </button>

                { errorMessage && <p>{ errorMessage }</p> }

            </div>
        )
    }

    handleClick(event) {
        const username = this.refs.username
        const password = this.refs.password
        const userInfo = { username: username.value.trim(), password: password.value.trim() }

        this.props.onLoginClick(userInfo)
    }
}

Login.propTypes = {
    onLoginClick: React.PropTypes.func.isRequired,
    errorMessage: React.PropTypes.string
}