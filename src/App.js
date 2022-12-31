import React,{Component} from "react";
import GeneralInfo from "./components/generalinfo/generalinfo";
import EduExperience from "./components/eduexperience/eduexperience";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>CV Builder</h1>
        </header>
        <GeneralInfo/>
        <EduExperience/>
      </div>
    );
  }
}
export default App;