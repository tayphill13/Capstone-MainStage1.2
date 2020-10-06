import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';



function ReusableMessageForm(props) {
  const { onSubmittingForm, defaultName, defaultWhat, defaultWhen, defaultWhere } = props;

  function formSubmissionHandler(event) {
    event.preventDefault();
    onSubmittingForm(event);
  }

  return (
    <React.Fragment>
      <Form onSubmit={formSubmissionHandler}>
        <Form.Group controlId="name">
          <Form.Label>Artist/Band:</Form.Label>
          <Form.Control type='text' placeholder="Artist/Band name" defaultValue={defaultName} required />
        </Form.Group>
        <Form.Group controlId="what">
          <Form.Label>What:</Form.Label>
          <Form.Control type='text' placeholder="What's happening?" defaultValue={defaultWhat} required />
        </Form.Group>
        <Form.Group controlId="when">
          <Form.Label>When:</Form.Label>
          <Form.Control type='text' placeholder="When is it happening?" defaultValue={defaultWhen} required />
        </Form.Group>
        <Form.Group controlId="where">
          <Form.Label>Where:</Form.Label>
          <Form.Control type='text' placeholder="Location, or platform" defaultValue={defaultWhere} required />
        </Form.Group>
        <button type='submit'>{props.buttonText}</button>
      </Form>
    </React.Fragment>
  );
}
ReusableMessageForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableMessageForm;