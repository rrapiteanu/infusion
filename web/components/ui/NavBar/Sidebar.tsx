import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import styled, { css, ThemeProvider } from "styled-components";

const styles = theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

const SidebarItems = styled(props => (
  <List {...props} />
))``;

const SidebarItemText = styled(props => <ListItemText {...props} />)`
  opacity: 1;
  // transition: opacity 1s, max-width 0s;
`;

const SidebarItem = styled(props => (
  <ListItem button {...props}>
    <ListItemIcon className="sidebarItemIcon">
      <InboxIcon />
    </ListItemIcon>
    <SidebarItemText primary={props.text} />
  </ListItem>
))`
  height: 50px;
  .sidebarItemIcon {
    margin: 0;
  }
`;

const StyledDrawer = styled(props => (
  <Drawer classes={{ paper: "paper" }} {...props} />
))`
  &,
  & .paper {
    width: 240px;
    flex-shrink: 0;
    white-space: "nowrap";

    ${props =>
      props.open &&
      css`
        transition: ${props =>
          props.theme.transitions.create("width", {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.enteringScreen
          })};

        ${SidebarItemText} {
          &,
          & span {
            transition: opacity 1s, max-width 0s 1s;
          }
        }
      `}
    ${props =>
      !props.open &&
      css`
        overflow-x: hidden;
        transition: ${props =>
          props.theme.transitions.create("width", {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.leavingScreen
          })};
        width: ${props => props.theme.spacing.unit * 7 + 1}px;
        ${props.theme.breakpoints.up("md")} {
          width: ${props.theme.spacing.unit * 9 + 1}px;
        }
        ${SidebarItem} {
          justify-content: center;
        }
        ${SidebarItemText} {
          &,
          & span {
            // display: none;
            max-width: 0px;
            opacity: 0;
            flex: auto;
            padding: 0;
            max-height: 0px;
            transition: opacity 0s, max-width 0s 1s;
          }
        }
      `}
  }
`;

class Sidebar extends Component<any> {
  render() {
    const { classes, theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledDrawer variant="permanent" open={this.props.open}>
          <div className={classes.toolbar}>
            <IconButton onClick={this.props.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <SidebarItems>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <SidebarItem key={text} text={text} />
            ))}
          </SidebarItems>
        </StyledDrawer>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
