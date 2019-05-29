import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Badge extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Wrapper>
          <Ul>
            <Li l>
              {" "}
              <Img src={this.props.pic2} />{" "}
            </Li>
            <Li>
              <Text>
                <Link
                  to={{
                    pathname: `/movies/${this.props.title}`,
                    state: {
                      title: `${this.props.title}`,
                      name: `${this.props.name}`,
                      popularity: `${this.props.popularity}`,
                      vote_count: `${this.props.vote_count}`,
                      vote_average: `${this.props.vote_average}`,
                      Released: `${this.props.Released}`,
                      pic: [`${this.props.pic1}`, `${this.props.pic2}`],
                      overview: `${this.props.overview}`
                    }
                  }}
                >
                  {this.props.title}
                  {this.props.name}
                </Link>
              </Text>

              <Text>popularity: {this.props.popularity}</Text>
              <Text>vote_count: {this.props.vote_count}</Text>
              <Text>vote_average: {this.props.vote_average}</Text>
              <Text>Released: {this.props.released}</Text>
              {/* <Text>Awards: {this.props.award}</Text> */}
            </Li>
          </Ul>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  margin: 20px auto;
  width: 1000px;
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
