import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenMessageClicked(props.id)}>
        <h3>{props.name}</h3>
      </div>
    </React.Fragment>
  );
}


Message.propTypes = {
  name: PropTypes.string,
  whenMessageClicked: PropTypes.func
};

export default Message;