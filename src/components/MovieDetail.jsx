import React from "react";

import styled from "styled-components";

const MovieDetail = props => {
  const title = props.location.state.title;
  const name = props.location.state.name;
  const Released = props.location.state.Released;
  const popularity = props.location.state.popularity;
  const vote_count = props.location.state.vote_count;
  const vote_average = props.location.state.vote_average;
  const pic = props.location.state.pic;
  const overview = props.location.state.overview;

  return (
    <Div>
      <Img src={pic[0]} />
      <Img src={pic[1]} />
      <Header>{title}</Header>
      <Header>{name}</Header>
      <Text>Released: {Released}</Text>
      <Text>popularity: {popularity}</Text>
      <Text>Vote Count: {vote_count}</Text>
      <Text>Point: {vote_average}/10</Text>
      <Text>overview: {overview}</Text>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 30px;
`;
const Img = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 400px;
  height: 300px;
  padding: 0;
`;

const Header = styled.h1`
  font-family: "Raleway", sans-serif;
  margin-left: 60px;
`;

const Text = styled.p`
  font-family: "Roboto Mono", sans-serif;
  margin-left: 60px;
`;
export default MovieDetail;
