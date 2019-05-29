import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {};
  }

  componentDidMount(e) {}

  render() {
    return (
      <div>
        <NavBar>
          <Header>
            {" "}
            <Link style={{ color: "white" }} to={`/`}>
              MovieBlock
            </Link>
          </Header>
          <Ul>
            <Li>
              <Link style={{ color: "white" }} to={`/`}>
                Home
              </Link>
            </Li>
            <Li>
              {" "}
              <Link style={{ color: "white" }} to={`/movies`}>
                List
              </Link>
            </Li>
          </Ul>
        </NavBar>
      </div>
    );
  }
}

const NavBar = styled.nav`
  display: flex;
  background: rgb(36, 40, 51);
  color: white;
  align-items: center;
  text-align: center;
  min-height: 10vh;
  justify-content: space-around;
`;

const Header = styled.h1`
  font-family: "Monoton", sans-serif;
`;
const Ul = styled.ul`
  width: 40%;
  display: flex;
  list-style-type: none;
  text-decoration: none;
  align-items: center;
  justify-content: space-around;
`;

const Li = styled.li`
  color: white;
`;

export default Nav;
