import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from "react-redux-firebase";


function MessageDetails(props) {
  const { message } = props;
  const firestore = useFirestore();

  function addMessageToFirestore(event) {
    event.preventDefault();

    props.onNewResponseCreation();

    return firestore.collection('messages').add({
      what: event.target.what.value,
      when: event.target.when.value,
      where: event.target.where.value
    });
  }
  return (
    <React.Fragment>
      <h1>{message.name}</h1>
      <form onSubmit={addMessageToFirestore}>
        <label>
          {message.what}
          <input name='what'>
          </input>
        </label>
        <br />
        <label>
          {message.when}
          <input name='when'>
          </input>
        </label>
        <br />
        <label>
          {message.where}
          <input name='where'>
          </input >
        </label>
        <br />
        <button type='submit'>Submit Message!</button>
      </form >
    </React.Fragment >
  );
}

MessageDetails.propTypes = {
  onNewResponseCreation: PropTypes.func,
  message: PropTypes.object,
};

export default MessageDetails;