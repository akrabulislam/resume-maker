import React, { useState, useContext } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { ResumeContext } from "../../contexts/ResumeContext";

export const Collapsible = ({ position }) => {
  const { content, setExperienceData } = useContext(ResumeContext);

  const [experiendField, setExperiendField] = useState({
    iscollapse: true,
    companyname: "Add Work Experience",
    role: "",
    start: "",
    end: "",
    description: "",
    isAdded: false,
    show: true,
    bullets : []
  });

  const changeCollapse = () => {
    setExperiendField((prev) => ({
      ...prev,
      iscollapse: !prev.iscollapse,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperiendField((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(experiendField);
  };

  function bulletsChange (pos,value){
    let updatedObject = experiendField;
    updatedObject.bullets[pos] = value;
    setExperiendField(updatedObject);
    console.log(experiendField);
  }

  const handleExperienceAdded = (e) => {
    if (
      experiendField.companyname.length >= 1 &&
      experiendField.role.length >= 1 &&
      experiendField.start.length >= 1 &&
      experiendField.end.length >= 1
    ) {
      setExperiendField((prev) => ({
        ...prev,
        iscollapse: !prev.iscollapse,
        isAdded: true,
      }));

      //now update the context
      setExperienceData(position, {
        name: experiendField.companyname,
        role: experiendField.role,
        start: experiendField.start,
        end: experiendField.end,
        description: experiendField.description,
        bullets : experiendField.bullets,
        show: true
      });
    }
  };

  const handleChangeShow = () => {
    console.log("Show " + experiendField.show);
    setExperiendField((prev) => ({
      ...prev,
      show: !prev.show,
    }));
  };

  return (
    <div className="collapsible-component my-4 border border-gray-200 rounded p-5 mx-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        name="iscollapse"
        onClick={changeCollapse}
      >
        <h6 className="text-sm font-medium">
          {experiendField.companyname.length < 1
            ? "Add Work Experience"
            : experiendField.companyname}
        </h6>
        {!experiendField.iscollapse ? <ExpandLessIcon style={{ width: '17px' }} /> : <ExpandMoreIcon style={{ width: '17px' }} />}
      </div>
      {!experiendField.iscollapse && (
        <div className="mt-6 block">
          <div>
            <div className="w-full flex flex-col mb-6">
              <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Amazon"
                name="companyname"
                value={
                  experiendField.companyname === "Add Work Experience"
                    ? ""
                    : experiendField.companyname
                }
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col mb-6">
              <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
                Role
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Full-Stack Web Developer"
                name="role"
                value={experiendField.role}
                onChange={handleChange}
              />
            </div>
            <div
              className="grid grid-cols-2 col-gap-4"
              style={{ gridColumnGap: "1rem" }}
            >
              <div className="w-full flex flex-col mb-6">
                <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
                  Start Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="March 2018"
                  name="start"
                  value={experiendField.start}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col mb-6">
                <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
                  End Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="June 2022"
                  name="end"
                  value={experiendField.end}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full flex flex-col mb-6">
              <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
                Description
              </label>
              <textarea
                className="appearance-none block leading-7 w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                rows="5"
                name="description"
                value={experiendField.description}
                onChange={handleChange}
              ></textarea>
              <div className="mt-2">
                <p class="text-gray-800 text-xs">
                  You can use{" "}
                  <a
                    class="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                  >
                    GitHub Flavored Markdown
                  </a>{" "}
                  to style this section of the text.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mb-6">
            <label className="uppercase tracking-wide text-gray-600 text-xs font-semibold mb-2">
              Bullets
            </label>
            <input
              className="appearance-none block mb-5 w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="I learner .. "
              value = {experiendField.bullets[0]}
              onChange={(e)=> bulletsChange(0,e.target.value)}
            />

            <input
              className="appearance-none block mb-5 w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="I learner .."
              value = {experiendField.bullets[1]}
              onChange={(e)=> bulletsChange(1,e.target.value)}
            />

            <input
              className="appearance-none block mb-5 w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="I learner .."
              value = {experiendField.bullets[2]}
              onChange={(e)=> bulletsChange(2,e.target.value)}
            />

            <input
              className="appearance-none block mb-5 w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="I learner .."
              value = {experiendField.bullets[3]}
              onChange={(e)=> bulletsChange(3,e.target.value)}
            />

            <input
              className="appearance-none block mb-5 w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="I learner .."
              value = {experiendField.bullets[4]}
              onChange={(e)=> bulletsChange(4,e.target.value)}
            />
          </div>
          <div>
            {!experiendField.isAdded && (
              <button
                onClick={handleExperienceAdded}
                type="button"
                class="bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-5 rounded"
              >
                <div class="flex items-center">
                  <AddIcon />
                  <span class="text-sm">Add</span>
                </div>
              </button>
            )}

            {experiendField.isAdded && (
              <div class="flex justify-space-between">
                <Checkbox
                  checked={experiendField.show}
                  onChange={handleChangeShow}
                />
                {experiendField.show ? (
                  <Button variant="text">Show</Button>
                ) : (
                  <Button variant="text">Hide</Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
