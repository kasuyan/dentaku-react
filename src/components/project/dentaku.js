import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/dentaku';

import NumBtn from './Numbtn';
import PlusBtn from './Plusbtn';
import Result from './Result';

class Dentaku extends React.Component {
  render() {
    // const { calculator, actions } = this.props;
    // console.log('Dentaku this.props=', this.props);
    // console.log('Dentaku render', calculator, actions);

    return (
      <div className="dentaku">
        <ul>
          <li>
            <NumBtn n={1} onClick={() => actions.onNumClick(1)}>
              1
            </NumBtn>
          </li>
          <li>
            <NumBtn n={2} onClick={() => actions.onNumClick(2)}>
              2
            </NumBtn>
          </li>
          <li>
            <NumBtn n={3} onClick={() => actions.onNumClick(3)}>
              3
            </NumBtn>
          </li>
          <li>
            <NumBtn n={4} onClick={() => actions.onNumClick(4)}>
              4
            </NumBtn>
          </li>
          <li>
            <NumBtn n={5} onClick={() => actions.onNumClick(5)}>
              5
            </NumBtn>
          </li>
          <li>
            <NumBtn n={6} onClick={() => actions.onNumClick(6)}>
              6
            </NumBtn>
          </li>
          <li>
            <NumBtn n={7} onClick={() => actions.onNumClick(7)}>
              7
            </NumBtn>
          </li>
          <li>
            <NumBtn n={8} onClick={() => actions.onNumClick(8)}>
              8
            </NumBtn>
          </li>
          <li>
            <NumBtn n={9} onClick={() => actions.onNumClick(9)}>
              9
            </NumBtn>
          </li>
          <li>
            <NumBtn n={0} onClick={() => actions.onNumClick(0)}>
              0
            </NumBtn>
          </li>
          <li>
            <PlusBtn onClick={actions.onPlusClick} />
          </li>
        </ul>
        <Result />
      </div>
    );
  }
}

const mapState = state => ({
  calculator: state.calculator
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(Dentaku);
