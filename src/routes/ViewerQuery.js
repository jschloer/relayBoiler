import Relay from 'react-relay';

export default {
  viewer: (Component) => Relay.QL`
    query {
      viewer {
        ${Component.getFragment('viewer')}
      }
    }
  `
};

export const itemQuery = {
  viewer: (Component) => Relay.QL`
    query {
      node(id: $id) {
        ${Component.getFragment('viewer')}
      }
    }
  `
};

