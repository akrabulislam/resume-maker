import React from 'react';
import { ProfileOutput } from './Sections/ProfileOutput';
import { Experience } from './Sections/Experience';
import { TechnicalSkillOutput } from './Sections/TechnicalSkillOutput';
import { EducationOutput } from './Sections/EducationOutput';


export const ActualResume = React.forwardRef((props, ref) => {
  return (
    <div className='resume-output'>
      <div style={{ color: 'red' }} ref={ref}>
        <div className='resume-content' style={{ padding: '30px', fontFamily: "'Rubik', sans-serif" }}>
          <ProfileOutput />
          <div class="flex justify-between pt-4">
            <div class="left" style={{width : '55%'}}>
              <Experience />
              <EducationOutput />
            </div>
            <div class="right" style={{width : '40%'}}>
              <TechnicalSkillOutput/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});