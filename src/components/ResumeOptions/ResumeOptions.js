import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Header } from './Header/Header'
import { makeStyles } from '@mui/styles';
import { Sections } from './Sections/Sections';

import { ResumeContextProvider } from '../../contexts/ResumeContext';

const userStyle = makeStyles({
  resumeOptions: {
    width: '320px',
    height: '100vh',
    boxShadow: '0 0 0.5cm #7b7d7d',
    background: 'white',
    position: 'absolute',
    right: '0px',
    top: '0px',
    zIndex: '10'
  }
});

export const ResumeOptions = () => {
  const classNames = userStyle();
  return (
    <ResumeContextProvider>
      <div className={'resume-options ' + classNames.resumeOptions}>
        <Header />
        <Navbar />
        <Sections />
      </div>
    </ResumeContextProvider>
  );
}
