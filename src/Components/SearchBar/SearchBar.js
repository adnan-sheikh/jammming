import "./SearchBar.css";
import React from "react";

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input type="text" placeholder="Enter a Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}