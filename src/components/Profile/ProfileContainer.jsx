import { getUserProfile, getUserStatus, savePhoto, updateStatus } from '../../redux/profile-reducer';

import Profile from './Profile';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const MY_USER_ID = 13583;
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = MY_USER_ID;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile, getUserStatus, updateStatus, savePhoto
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
