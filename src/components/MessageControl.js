import React from 'react';
import NewMessageForm from "./NewMessageForm";
import About from './About'
import MessageList from "./MessageList";
import MessageDetails from "./MessageDetails";
import UpdateMessage from "./UpdateMessage";
import { connect } from 'react-redux';
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";


class MessageControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedMessage: null,
      editing: false,
    };
  }
  handleClick = () => {
    if (this.state.selectedMessage != null) {
      this.setState({
        selectedMessage: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewMessageToList = (newMessage) => {
    const { dispatch } = this.props;
    const action = a.addMessage(newMessage);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleViewMessageDetails = (id) => {
    this.props.firestore
      .get({ collection: "messages", doc: id })
      .then((message) => {
        const firestoreMessage = {
          name: message.get('name'),
          what: message.get('what'),
          when: message.get('when'),
          where: message.get('where'),
          id: message.id,


        };
        this.setState({ selectedMessage: firestoreMessage });
      });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingMessageInList = (messageToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(messageToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedMessage: null
    });
  };

  handleDeletingMessage = (id) => {
    this.props.firestore.delete({ collection: "messages", doc: id });
    this.setState({ selectedMessage: null });
  };


  render() {
    const auth = this.props.firebase.auth();
    if(!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Pretend there's 'loading' music...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in!</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = (
          <UpdateMessage
            message={this.state.selectedMessage}
            onUpdateMessage={this.handleEditingMessageInList}/>
        );
        buttonText = "Return to Message List";
      } else if (this.state.selectedMessage != null) {
        currentlyVisibleState = (
          <MessageDetails
            message={this.state.selectedMessage}
            onClickingDelete={this.handleDeletingMessage}
            onClickingEdit={this.handleEditClick}/>
        );
        buttonText = 'Return to Message List';
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = (
          <NewMessageForm
            onNewMessageCreation={this.handleAddingNewMessageToList}/>
        );
        buttonText = "Return to Message List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = (
          <About
            onNewMessageCreation={this.handleAddingNewMessageToList} />
        );
        buttonText = "Return to Message List";
      } else {
        currentlyVisibleState = (
          <MessageList
            onMessageSelection={this.handleViewMessageDetails}/>
        );
        buttonText = "Add Message";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onCLick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

MessageControl = connect(mapStateToProps)(MessageControl);

export default withFirestore(MessageControl);