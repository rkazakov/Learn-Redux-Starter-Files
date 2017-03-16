import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './Main';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
