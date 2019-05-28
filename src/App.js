import React from "react";
import styled from "styled-components";
import Peoples from "./components/Peoples";

function App() {
  return (
    <Div>
      <Peoples />
    </Div>
  );
}

const Div = styled.div`
  background: rgb(239, 241, 243);
  overflow: scroll;
  height: 100%;
`;

export default App;
