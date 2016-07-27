import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

class App extends React.Component {
    render() {
        const { isAuthenticated,
            errorMessage,
            dispatch } = this.props

        return (
            <div>
                <Navbar
                    isAuthenticated = { isAuthenticated }
                    errorMessage    = { errorMessage }
                    dispacht        = { dispatch }
                />
            </div>
        )
    }
}

App.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    errorMessage   : React.PropTypes.string,
    dispatch       : React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { authentication }                = state
    const { isAuthenticated, errorMessage } = authentication

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(App)