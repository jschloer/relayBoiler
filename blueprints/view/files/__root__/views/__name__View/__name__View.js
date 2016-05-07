import React, {PropTypes} from 'react';
import Relay from 'react-relay';

export class <%= pascalEntityName %> extends React.Component {
  static propTypes = {
    viewer: PropTypes.object
  };

  render () {
    return (
      <div></div>
    )
  }
}

export default Relay.createContainer(<%= pascalEntityName %>, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        
      }`
  }
});
