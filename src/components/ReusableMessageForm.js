import React from 'react';
import PropTypes from 'prop-types';



function ReusableMessageForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='What would you like your message title to be?' /><br />
        <input
          type='text'
          name='what'
          placeholder='What is happening?' /><br />
        <input
          type='text'
          name='where'
          placeholder="Where is it goin' down?" /><br />
        <input
          type='text'
          name='when'
          placeholder='When is it taking place?' /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}
ReusableMessageForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableMessageForm;