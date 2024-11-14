import React from "react";
import Header from "../src/components/header/header";
import Main from "../src/components/Main/main"
import "./Global/global.scss"; // Apenas importe o arquivo SCSS

function App() {
  return (
    <>
      <Header />
      <Main/>
    </>
  );
}

export default App;
