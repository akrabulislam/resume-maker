import React, {useContext} from "react";
import { Profile } from "./SectionList/Profile";
import { Summary } from "./SectionList/Summary";
import { Experience } from "./SectionList/Experience";
import { Education } from "./SectionList/Education";
import { TechnicalSkills } from "./SectionList/TechnicalSkills";
import { Achievements } from "./SectionList/Achievements";
import { Projects } from "./SectionList/Projects";
import { Hobbies } from "./SectionList/Hobbies";
import { ResumeContext } from "../../../contexts/ResumeContext";
import './style.css';

function RenderActualComponent(value) {
  console.log(value);
  switch (value) {
    case 0:
      return <Profile />;
      break;
    case 1:
      return <Summary />;
      break;
    case 2:
      return <Experience />;
      break;
    case 3:
      return <Education />;
      break;
    case 4:
      return <TechnicalSkills />;
      break;
    case 5:
      return <Achievements />;
      break;
    case 6:
      return <Projects />;
      break;
    default:
      return <Hobbies />
      break;
  }
}

export const Sections = () => {
  const { content } = useContext(ResumeContext);
  return (
    <div className="sections">{RenderActualComponent(content.leftSidebar.activeNavbar)}</div>
  );
};
