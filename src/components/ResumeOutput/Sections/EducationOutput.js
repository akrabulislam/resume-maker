import React, { useContext } from 'react'
import { makeStyles } from "@mui/styles";
import { ResumeContext } from '../../../contexts/ResumeContext';

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
    color : '#000000'
  },
  name: {
    color: '#008CFF',
    fontSize: '16px',
    fontWeight: '600'
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
          <span className={classes.name}>{content.leftSidebar.education.one.name}</span>
        </div>
      </div>
    </div>
  );
}
