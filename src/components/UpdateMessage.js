import React from "react";
import ReusableMessageForm from "./ReusableMessageForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function UpdateMessage(props) {
  const firestore = useFirestore();
  const { message } = props;

  function handleEditMessageSubmission(event) {
    event.preventDefault();
    props.onEditSurvey();
    const propertiesToUpdate = {
      name: event.target.name.value,
      q1: event.target.q1.value,
      q1a1: event.target.q1a1.value,
      q1a2: event.target.q1a2.value,
      q1a3: event.target.q1a1.value,
      q2: event.target.q1.value,
      q2a1: event.target.q2a1.value,
      q2a2: event.target.q2a2.value,
      q2a3: event.target.q2a3.value,
      q3: event.target.q3.value,
      q3a1: event.target.q3a1.value,
      q3a2: event.target.q3a2.value,
      q3a3: event.target.q3a3.value,
    };
    return firestore.update(
      { collection: "messages", doc: message.id },
      propertiesToUpdate
    );
  }

  return (
    <React.Fragment>
      <ReusableMessageForm
        formSubmissionHandler={handleEditMessageSubmission}
        buttonText="Update Message"
      />
    </React.Fragment >
  );
}

UpdateMessage.propTypes = {
  onEditSurvey: PropTypes.func
};

export default UpdateMessage;