import React,{Component} from "react";
import GeneralInfo from "./components/generalinfo/generalinfo";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>CV Builder</h1>
        </header>
        <GeneralInfo/>
      </div>
    );
  }
}
export default App;