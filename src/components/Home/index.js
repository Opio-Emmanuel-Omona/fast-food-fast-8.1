import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    componentWillMount() {
        const { history, loginStatus } = this.props;
        if(loginStatus === false) {
            history.push('/login');
        }
    }

    componentWillReceiveProps(nextProps) {
        const { history, loginStatus } = nextProps;
        if(loginStatus === false) {
            history.push('/login');
        }
    }

    render() {
        return (<div>
            Home
        </div>);
    }
}

export const mapStateToProps = state => ({
    loginStatus: state.loginReducer.loginStatus
});
  
export default connect(mapStateToProps)(Home);
