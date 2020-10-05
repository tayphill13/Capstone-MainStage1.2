import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from 'react-redux';

function MessageList(props) {
  useFirestoreConnect([{ collection: 'messages' }]);

  const messages = useSelector((state) => state.firestore.ordered.messages);

  if (isLoaded(messages)) {
    return (
      <React.Fragment>
        { messages.map((message) => {
          return (
            <Message
                whenMessageClicked={props.onMessageSelection}
                name={message.name}
                what={message.what}
                when={message.when}
                where={message.where}
                id={message.id}
                key={message.key}
              />
          );
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading... just hum along for a moment</h3>
      </React.Fragment>
    );
  }
}
MessageList.propTypes = {
  onMessageSelection: PropTypes.func,
  message: PropTypes.object,
};

export default MessageList;