import React from 'react';
import Dentaku from '../project/dentaku';

export default class Page2 extends React.Component {
  render() {
    // console.log('Page2 this.props=', this.props);
    return (
      <div>
        <Dentaku />
        <img src="./image/base03.png" width="100" />
      </div>
    );
  }
}
