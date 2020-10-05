import React from 'react';
import AddMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";
import MessageDetail from "./MessageDetail";
import UpdateMessage from "./UpdateMessage";
// import MessageComplete from './MessageComplete'
import { connect } from 'react-redux';
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";


class MessageControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMessage: null,
      editing: false,
      // responseComplete: false,
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updateMessageElapsedWaitTime(),
      6000
    )
  }
  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateMessageElapsedWaitTime = () => {
    const { dispatch } = this.props;
  };

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
  };

  handleAddingNewMessageToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  // handleAddingNewResponseToList = () => {
  //   this.setState({
  //     selectedSurvey: null,
  //     responseComplete: true
  //   })
  // };

  handleViewMessageDetails = (id) => {
    this.props.firestore
      .get({ collection: "messages", doc: id })
      .then((survey) => {
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

  handleEditingMessageInList = () => {
    this.setState({
      editing: false,
      selectedMessage: null,
    });
  };

  handleDeletingMessage = (id) => {
    this.props.firestore.delete({ collection: "messages", doc: id });
    this.setState({ selectedMessage: null });
  };

}