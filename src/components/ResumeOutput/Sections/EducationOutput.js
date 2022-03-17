import React, { useContext } from 'react'
import { makeStyles } from "@mui/styles";
import { ResumeContext } from '../../../contexts/ResumeContext';
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import LocationOn from "@mui/icons-material/LocationOn";
import Link from "@mui/icons-material/Link";

const userStyle = makeStyles({
  heading: {
    textTransform: 'uppercase',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#000000',
    borderBottom: '3px solid #000000'
  },
  eductionWrapper: {
    padding: '10px 0px'
  },
  major: {
    fontSize: '22px',
    color: '#000000'
  },
  name: {
    color: '#008CFF',
    fontSize: '16px',
    fontWeight: '600'
  },
  grade: {
    color: '#008CFF',
    fontSize: '16px',
  },
  gradeWrapper : {
    color: 'gray',
    fontSize: '16px',
  },
  duration: {
    color: '#000',
    fontSize: '11px',
    display : 'flex',
    alignItems : 'center'
  },
  location : {
    color: '#000',
    fontSize: '11px',
    display : 'flex',
    alignItems : 'center'
  },
  url : {
    color: '#000',
    fontSize: '11px',
  }
});

export const EducationOutput = () => {
  const classes = userStyle();
  const { content } = useContext(ResumeContext);
  return (
    <div className='educationOutput'>
      <h1 className={classes.heading}>Education</h1>
      <div className="content">
        <div className={classes.eductionWrapper}>
          <h2 className={classes.major}>{content.leftSidebar.education.one.major}</h2>
          <div className='flex justify-between'>
            <span className={classes.name}>{content.leftSidebar.education.one.name}</span>
            <span className={classes.gradeWrapper}>CGPA : <span className={classes.grade}>  {content.leftSidebar.education.one.grade}</span> / 4.00</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className={classes.duration}>
              <CalendarMonth style={{ color: "#008CFF", width: "12px" , marginRight : '5px'}}/>
              <span>{content.leftSidebar.education.one.start}-{content.leftSidebar.education.one.end}</span>
            </div>

            <div className={classes.location}>
              <LocationOn style={{ color: "#008CFF",padding : '5px'}} />
              <span>{content.leftSidebar.education.one.location}</span>
            </div>

            <div className={classes.url}>
              <Link style={{ color: "#008CFF",padding : '5px'}} />
              <a href={content.leftSidebar.education.one.url}>{content.leftSidebar.education.one.urlName}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
