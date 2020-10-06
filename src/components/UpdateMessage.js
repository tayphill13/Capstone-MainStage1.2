import React from "react";
import PropTypes from "prop-types";
import ReusableMessageForm from "./ReusableMessageForm";
import { useFirestore } from "react-redux-firebase";

function UpdateMessage(props) {

  const firestore = useFirestore();

  function addMessageToFirestore(event) {
    event.preventDefault();

    props.onNewMessageCreation();

    return firestore.collection("messages").add({
      name: event.target.name.value,
      what: event.target.what.value,
      when: event.target.when.value,
      where: event.target.where.value,
    });
  }
  return (
    <React.Fragment>
      <ReusableMessageForm

        formSubmissionHandler={addMessageToFirestore}
        buttonText="Create Message"
      />
    </React.Fragment>
  );
}
UpdateMessage.propTypes = {
  onNewMessageCreation: PropTypes.func,
};

export default UpdateMessage;