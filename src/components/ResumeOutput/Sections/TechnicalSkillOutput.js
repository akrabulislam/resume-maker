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
  }
});


export const TechnicalSkillOutput = () => {
  const classes = userStyle();
  const { content } = useContext(ResumeContext);
  return (
    <div className='technical-skill-output'>
      <h1 className={classes.heading}>Technical Skills</h1>
      <div className='flex pt-3 flex-wrap'>{
        Array(10).fill(1).map((x, i) => (
          <div class="border-solid rounded border border-[#a9a9a9] p-1 m-1 text-black text-sm">{content.leftSidebar.technicalSkills[i].name}</div>
        ))
      }
      </div>
    </div>
  );
}
