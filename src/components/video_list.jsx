import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

const styles = {
  root: {
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    cursor: "pointer"
  },
  titleStyle: {
    color: "rgb(0, 188, 212)"
  }
};

const VideoList = props => (
  <MuiThemeProvider>
    <div className="container" style={{ marginTop: "1%" }}>
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {props.videos.map(tile => (
            <GridTile
              onClick={() => {
                props.onVideoSelect(tile);
              }}
              key={tile.img}
              title={tile.snippet.title}
              actionIcon={
                <IconButton>
                  <StarBorder color="rgb(0, 188, 212)" />
                </IconButton>
              }
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.snippet.thumbnails.high.url} />
            </GridTile>
          ))}
        </GridList>
        <div>{props.videos.length}</div>
      </div>
    </div>
  </MuiThemeProvider>
);

export default VideoList;
