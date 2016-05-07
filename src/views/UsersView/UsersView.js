import React, { PropTypes } from 'react';
import Relay from 'react-relay';

export class UsersView extends React.Component {
  static propTypes = {
    viewer: PropTypes.object
  };

  render() {
    return (
      <div>
        {this.props.viewer.user.username}
      </div>
    );
  }
}

export default Relay.createContainer(UsersView, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        user{
          id
          username
          name
        }
      }`
  }
});

