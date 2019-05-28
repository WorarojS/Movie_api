import React, { Component } from "react";
import styled from "styled-components";
import Badge from "./Badge";
import Data from "./Data";

class Peoples extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // this.database.on("value", snap => {
    //   this.setState({
    //     Peoples: [Object.values(snap.val())]
    //   });
    //   console.log(this.state.Peoples);
    // });
  }

  render() {
    const Movie = Data.map(data => {
      return (
        <Badge
          title={data.Title}
          released={data.Released}
          runtime={data.Runtime}
          genre={data.Genre}
          director={data.Director}
          award={data.Awards}
          cover={data.Images[0]}
        />
      );
    });
    return (
      <div>
        <Wrapper>{Movie}</Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div``;

export default Peoples;
