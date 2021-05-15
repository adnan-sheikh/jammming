import "./SearchBar.css";
import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term)
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input 
          type="text" 
          placeholder="Enter a Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search} >SEARCH</button>
      </div>
    )
  }
}