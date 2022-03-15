import React, { createContext, useState } from "react";
import Appdata from '../data/appData';

export const ResumeContext = createContext({});


export const ResumeContextProvider = ({ children }) => {
  const [content, setContent] = useState(JSON.parse(localStorage.getItem("dataLocal")) || Appdata);

  //update state for left sidebar
  const setShowExample = (value) => {
    let updatedObject = content;
    updatedObject.leftSidebar.showExample = value;
    setContent({ ...content, ...updatedObject });
  }
  const setShowNavbar = (value) => {
    let updatedObject = content;
    updatedObject.leftSidebar.activeNavbar = value;
    setContent({ ...content, ...updatedObject });
  }
  const setProfileData = (value) => {
    let updatedObject = content;
    updatedObject.leftSidebar.profile = value;
    setContent({ ...updatedObject });
  }

  const setExperienceData = (position, value) => {
    let updatedObject = content;
    updatedObject.leftSidebar.experience = updatedObject.leftSidebar.experience.map((item, index) => {
      if (index === position) {
        return { ...item, ...value };
      }
      return item;
    });
    setContent({ ...updatedObject });
  }

  const setTechnicalSkills = (position, value) => {
    let updatedObject = content;
    updatedObject.leftSidebar.technicalSkills = updatedObject.leftSidebar.technicalSkills.map((item, index) => {
      if (index === position) {
        return { ...item, ...value };
      }
      return item;
    });
    setContent({ ...updatedObject });
  }

  return (
    <ResumeContext.Provider value={{ content, setShowNavbar, setProfileData, setExperienceData, setTechnicalSkills }}>
      {children}
    </ResumeContext.Provider>
  );
}

