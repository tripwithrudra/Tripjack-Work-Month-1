import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Components/Main";


export class App extends React.Component {
  render() {
    return (
      <Main />
    )
  }
}

export default App


createRoot(document.getElementById('root')).render(
    <App />
)