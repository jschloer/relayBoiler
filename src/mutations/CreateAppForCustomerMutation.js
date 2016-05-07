import Relay from 'react-relay';

export default class CreateAppForCustomerMutation extends Relay.Mutation {
  static fragments = {
    customer: () => Relay.QL`
      fragment on Customer {
        id,
      }
    `,
    app: () => Relay.QL`
      fragment on Application {
        id,
      }
    `,
  };
  getFatQuery() {
    return Relay.QL`
      fragment on CreateAppForCustomerPayload @relay(pattern: true) {
        result
      }
    `;
  }
  getConfigs() {
    return [
    ];
  }
  getMutation() {
    return Relay.QL`mutation{createAppForCustomer}`;
  }
  getVariables() {
    return {
      customerId: this.props.customer.id,
    };
  }
};
