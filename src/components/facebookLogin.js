import React from 'react';

export default class FacebookLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.fbAsyncInit = () => {
            FB.init({
             appId: this.props.socialId,
             xfbml: this.props.xfbml,
             cookie: this.props.cookie,
             version: this.props.version,
             });
        };

        (function (d, s, id) {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/all.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        return (
            <div>
                {this.props.facebookTest}
            </div>
        );
    }
}