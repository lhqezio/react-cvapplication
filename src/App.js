import React,{Component} from "react";
import GeneralInfo from "./components/generalinfo/generalinfo";
import EduExperience from "./components/experience/eduexperience";
import WorkExperience from "./components/experience/workexperience";
import Skills from "./components/skills/skills";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>CV Builder</h1>
        </header>
        <GeneralInfo/>
        <EduExperience/>
        <WorkExperience/>
        <Skills/>
      </div>
    );
  }
}
export default App;