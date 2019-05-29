import React, { Component } from "react";
import styled from "styled-components";
import Badge from "./Badge";
import Data from "./Data";

class Peoples extends Component {
  constructor(props) {
    super(props);
    this.apiKey = "";

    this.state = {
      data: [],
      search: ""
    };
    this.Trending = this.Trending.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {}
  componentWillUpdate() {
    console.log(this.state.search);
  }

  search() {
    this.setState({
      data: [],
      search: ""
    });
    const fetchItems = async () => {
      const dataSearch = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          this.apiKey
        }&query=${this.state.search}`
      );

      const items = await dataSearch.json();
      var i;
      for (i = 0; i < items.results.length; i++) {
        // console.log(items.results[i].original_title);
        this.setState({
          data: this.state.data.concat([items.results[i]])
        });
      }
      console.log("search" + items.results[0]);
    };
    fetchItems();
  }

  Trending() {
    this.setState({
      data: [],
      search: ""
    });
    const fetchItems = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`
      );

      const items = await data.json();
      var i;
      for (i = 0; i < items.results.length; i++) {
        // console.log(items.results[i].original_title);
        this.setState({
          data: this.state.data.concat([items.results[i]])
        });
      }
    };
    fetchItems();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const pic = "https://image.tmdb.org/t/p/w500";

    const Movie = this.state.data.map(data => {
      return (
        <Badge
          id={data.id}
          title={data.original_title}
          name={data.name}
          released={data.release_date}
          popularity={data.popularity}
          vote_count={data.vote_count}
          vote_average={data.vote_average}
          original_language={data.original_language}
          pic1={`${pic}` + `${data.backdrop_path}`}
          pic2={`${pic}` + `${data.poster_path}`}
          overview={data.overview}
        />
      );
    });

    return (
      <div>
        <button onClick={this.Trending}>Trending Movie</button>
        <Input
          name="search"
          type="text"
          placeholder="Search name"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button onClick={this.search}>Search</button>
        <Wrapper>{Movie}</Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div``;
const Input = styled.input``;

export default Peoples;
