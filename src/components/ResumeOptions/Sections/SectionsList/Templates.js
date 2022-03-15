import React from 'react';
import ResumeOne from '../../../../assets/resume-1.jpg';


export const Templates = () => {
  return (
    <div className='templates-list grid grid-cols-1 gap-x-2'>
      <div className='cursor-pointer p-7'><img src={ResumeOne} alt="" /></div>
    </div>
  );
}
