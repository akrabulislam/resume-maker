import React, { useContext } from "react";
import { ResumeContext } from "../../../../contexts/ResumeContext";

export const TechnicalSkills = () => {
  const { content, setTechnicalSkills } = useContext(ResumeContext);
  function handleChange(index, value) {
    setTechnicalSkills(index, { name: value });
  }
  return (
    <div className="technical-skills" style={{ padding: "10px", paddingTop: "30px" }}>
      {Array(10)
        .fill(1)
        .map((x, i) => (
          <div className="flex flex-wrap -mx-3 mb-3 items-center" key={i}>
            <div className="w-full px-3 mb-6 md:mb-0">
              <input
                onChange={(e) =>
                  setTechnicalSkills(i, { name: e.target.value })
                }
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="first-name"
                type="text"
                placeholder="HTML"
              />
            </div>
          </div>
        ))}
    </div>
  );
};
