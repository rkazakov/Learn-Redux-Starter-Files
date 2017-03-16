import React from 'react';

const Verse = React.createClass({
  render() {
    console.log('--------------', this.props);
    const { post, i, comments } = this.props;
    return (
      <div className="verse">
        {/* <button className="likes">&hearts;</button> */}
        <button onClick={this.props.getNextVerse.bind(null, i)} className="likes">&hearts;</button>
      </div>
    )
  }
});

export default Verse;
