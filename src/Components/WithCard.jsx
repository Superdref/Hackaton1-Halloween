import React from 'react';

import Card from './Card';

import { Row } from 'reactstrap';

class WithRaids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Row className="justify-content-between">
        <Card />
      </Row>
    );
  }
}

export default WithRaids;