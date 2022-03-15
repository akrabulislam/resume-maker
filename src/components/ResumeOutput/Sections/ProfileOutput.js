import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import { makeStyles } from "@mui/styles";
import Email from "@mui/icons-material/Email";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import AddLocation from "@mui/icons-material/AddLocation";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Quora from "../../../assets/quora-brands.svg";
import StackOverflow from "../../../assets/stack-overflow-brands.svg";

const userStyle = makeStyles({
  h1: {
    color: "#000000",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "30px",
  },
  h2: {
    color: "#008CFF",
    fontWeight: "600",
  },
  p: {
    color: "#000000",
    fontSize: "13px",
    padding: "5px 0px",
  },
  span: {
    color: "#000000",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
  },
});

export const ProfileOutput = () => {
  const classes = userStyle();
  const { content } = useContext(ResumeContext);
  return (
    <div
      className="profile-output"
      style={{ borderBottom: "1.6px solid black" }}
    >
      <div className="grid gap-4 grid-cols-2">
        <div className="left">
          <h1 className={classes.h1}>
            {content.leftSidebar.profile.firstName}{" "}
            {content.leftSidebar.profile.lastName}
          </h1>
          <h2 className={classes.h2}>{content.leftSidebar.profile.subtitle}</h2>
          <p className={classes.p}>{content.leftSidebar.profile.motivation}</p>
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <span className={classes.span}>
            {content.leftSidebar.profile.emailAddress}
            <Email style={{ padding: "5px", color: "#008CFF" }} />
          </span>
          <span className={classes.span}>
            {content.leftSidebar.profile.mobileNumber}
            <PhoneAndroid style={{ padding: "5px", color: "#008CFF" }} />
          </span>
          <span className={classes.span}>
            {content.leftSidebar.profile.address}
            <AddLocation style={{ padding: "5px", color: "#008CFF" }} />
          </span>
          <span className={classes.span}>
            <a href={`https://www.${content.leftSidebar.profile.github}`}>
              {content.leftSidebar.profile.github}
            </a>
            <GitHub style={{ padding: "5px", color: "#008CFF" }} />
          </span>
          <span className={classes.span}>
            <a href={`https://www.${content.leftSidebar.profile.linkedIn}`}>
              {content.leftSidebar.profile.linkedIn}
            </a>
            <LinkedIn style={{ padding: "5px", color: "#008CFF" }} />
          </span>
          <span className={classes.span}>
            <a href={`https://www.${content.leftSidebar.profile.quora}`}>
              {content.leftSidebar.profile.quora}
            </a>
            <img src={Quora} alt="" style={{ padding: "5px" }} />
          </span>
          <span className={classes.span}>
            <a href={`https://www.${content.leftSidebar.profile.stackoverflow}`}>
              {content.leftSidebar.profile.stackoverflow}
            </a>
            <img src={StackOverflow} alt="" style={{ padding: "5px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};
