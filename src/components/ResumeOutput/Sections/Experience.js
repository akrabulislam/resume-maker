import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { ResumeContext } from "../../../contexts/ResumeContext";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import LocationOn from "@mui/icons-material/LocationOn";
import Link from "@mui/icons-material/Link";

const userStyle = makeStyles({
  heading: {
    textTransform: "uppercase",
    fontSize: "25px",
    fontWeight: "bold",
    color: "#000000",
    borderBottom: "3px solid #000000",
  },
  expericeneWrapper: {
    padding: "10px 0px",
  },
  role: {
    fontSize: "22px",
    color: "#000000",
  },
  name: {
    fontSize: "16px",
    color: "#008CFF",
    fontWeight: "600",
  },
  duration: {
    fontSize: "11px",
    color: "#000",
  },
  description: {
    color: "#384347",
    fontSize: "13px",
    lineHeight: "16px",
    padding: "7px 0px",
  },
  extra: {
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    color : '#000'
  },
});

export const Experience = () => {
  const classes = userStyle();
  const { content } = useContext(ResumeContext);
  return (
    <div className="experience-output">
      <h1 className={classes.heading}>Professional Experience</h1>
      <div className="content">
        <div className={classes.expericeneWrapper}>
          <h2 className={classes.role}>
            {content.leftSidebar.experience[0].role}
          </h2>
          <div className="flex justify-between items-center">
            <span style={{ width: "50%" }} className={classes.name}>
              {content.leftSidebar.experience[0].name}
            </span>
            <div className="flex items-center ">
              <CalendarMonth style={{ color: "#008CFF", padding: "5px" }} />
              <span className={classes.duration}>
                {content.leftSidebar.experience[0].start}
                {`-`}
              </span>
              <span className={classes.duration}>
                {content.leftSidebar.experience[0].end}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className={classes.extra}>
              <LocationOn style={{ color: "#008CFF",width : '12px'}} />
              <span style={{ marginTop: "1px" }}>
                Union city, United States
              </span>
            </div>
            <div className={classes.extra}>
              <Link style={{ color: "#008CFF", padding: "5px" }} />
              <a href="https://www.brillmark.com/" style={{ marginTop: "1px" }}>
                brillmark.com
              </a>
            </div>
          </div>
          <div className={classes.description}>
            {content.leftSidebar.experience[0].description}
          </div>
          <div className="bullets">
            <ul class="list-disc px-4">
              {content.leftSidebar.experience[0].bullets.map((x, i) => (
                <li style={{ fontSize: "12px", color: "#384347" }} key={i}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
