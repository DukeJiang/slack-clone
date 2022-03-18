import React from "react";
import { Segment, Comment } from "semantic-ui-react";

import MessageForm from "./MessageForm";
import Message from "./Message";

class Messages extends React.Component {
  state = {
    replies: [],
    message : this.props.message,
    channel: this.props.currentChannel,
    user: this.props.currentUser
  };

  componentDidMount() {
    const { channel, user } = this.state;

    if (channel && user) {
      this.addListeners(channel.id);
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
  };

  addMessageListener = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on("child_added", snap => {
      loadedMessages.push(snap.val());
      this.setState({
        messages: loadedMessages,
        messagesLoading: false
      });
    });
  };

  displayReplies = replies =>
    replies.length > 0 &&
    replies.map(reply => (
      <Message
        key={reply.timestamp}
        message={reply}
        user={this.state.user}
      />
    ));


  render() {
    const { replies, message, channel, user } = this.state;

    return (
      <React.Fragment>

        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(replies)}
          </Comment.Group>
        </Segment>

        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
