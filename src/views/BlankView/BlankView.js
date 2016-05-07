import React from 'react';

type Props = {
  counter: number
};
export class Blank extends React.Component {
  props: Props;

  render() {
    return (
      <div>Placeholder View</div>
    );
  }
}

export default Blank;
