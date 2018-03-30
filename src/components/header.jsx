import React, { Component } from "react";
import { Redirect } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
// import NavigationClose from "material-ui/svg-icons/navigation/close";
import FlatButton from "material-ui/FlatButton";
import "./search_bar.css";

class Login extends Component {
  static muiName = "FlatButton";

  render() {
    return <FlatButton {...this.props} label="Login" />;
  }
}

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false, term: "" };
  }
  render() {
    // console.log(this.state.term);
    return (
      <div>
        <span style={{ cursor: "pointer" }} onClick={() => {}}>
          Title
        </span>
        <span style={{ marginLeft: "9%" }}>
          <input
            value={this.state.term}
            onChange={event => {
              this.onInputChange(event.target.value);
            }}
            type="text"
            className="sb"
            placeholder="Search..."
          />
        </span>
      </div>
    );
  }

  onInputChange = term => {
    this.setState({ term });
    this.props.callbackFromSearch(term);
  };
  // return <Redirect push to="/home" />;
}

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { logged: true };
  }

  myCallback = term => {
    this.props.onSearchTerm(term);
  };

  render() {
    // console.log(this.props.term);
    // if (this.state.redirect) {
    //   return alert("hi");
    // }
    return (
      <MuiThemeProvider>
        <AppBar
          zDepth={2}
          style={{ background: "grey", width: "100%" }}
          title={<SearchBar callbackFromSearch={this.myCallback} />}
          iconElementRight={this.state.logged ? <Login /> : <Logged />}
        />
      </MuiThemeProvider>
    );
  }
}
