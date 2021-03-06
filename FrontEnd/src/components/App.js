import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";

const App = ({ currentUser, currentChannel }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <SidePanel 
      key={currentUser && currentUser.id}
      currentUser={currentUser} 
    />

    <Grid.Column style={{ marginLeft: 280 }}>
      <Messages 
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
      />
    </Grid.Column>

  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel
});

export default connect(mapStateToProps)(App);
