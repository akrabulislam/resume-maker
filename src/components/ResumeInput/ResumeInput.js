import React, { useState } from 'react'
import { Header } from './Header/Header'
import { Navbar } from './Navbar/Navbar';
import { Sections } from './Sections/Sections';
import { makeStyles } from '@mui/styles';
import { ResumeInputContext } from '../../contexts/ResumeInputContext';


const userStyle = makeStyles({
  resumeInput: {
    maxWidth: '320px',
    boxShadow: '0 0 0.5cm #7b7d7d',
    background:'white',
    position : 'absolute',
    left : '0px',
    top: '0px',
    zIndex : '10'
  }
});

export const ResumeInput = () => {
  const classNames = userStyle();
  const [activeFeatures, setActiveFeatures] = useState(0);

  return (
    <div className={classNames.resumeInput}>
      <ResumeInputContext.Provider value={{ activeFeatures, setActiveFeatures }}>
        <Header />
        <Navbar />
        <Sections />
      </ResumeInputContext.Provider>
    </div>
  );
}
