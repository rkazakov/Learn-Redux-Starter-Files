import React from 'react';
import { Link } from 'react-router';
import Verse from './Verse';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <div>
          <Verse {...this.props}/>
        </div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
