//src/containers
import { connect } from 'react-redux';

import App from '../App';
import * as MyActions from '../actions/index';

const mapStateToProps = state => ({
  angle: state.angle,
  gameState: state.gameState
});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(MyActions.moveObjects(mousePosition));
  },
  startGame: () => {
    dispatch(MyActions.startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;