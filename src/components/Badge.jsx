import React, { Component } from "react";
import styled from "styled-components";

class Badge extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {};
  }

  componentDidMount(e) {}

  render() {
    return (
      <div>
        <Wrapper>
          <Ul>
            <Li l>
              <Img src={this.props.cover} />
            </Li>
            <Li r>
              <Text> {this.props.title}</Text>
              <Text>Genre: {this.props.genre}</Text>
              <Text>Director: {this.props.director}</Text>
              <Text>
                Released: {this.props.released} | {this.props.runtime}
              </Text>
              <Text>Awards: {this.props.award}</Text>
            </Li>
          </Ul>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  margin: 10px auto;
  width: 750px;
  height: 300px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  display: inline-block;

  ${props =>
    props.l &&
    `
  float: left;
  
  `}
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  padding: 0;
`;

const Text = styled.p`
  margin-left: 20px;
  width: 400px;
`;

export default Badge;
