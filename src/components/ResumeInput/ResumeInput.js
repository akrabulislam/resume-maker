import React,{useEffect,useContext} from 'react'
import { Header } from './Header/Header'
import { Navbar } from './Navbar/Navbar';
import { Sections } from './Sections/Sections';
import { makeStyles } from '@mui/styles';
import { ResumeContext } from '../../contexts/ResumeContext';

const userStyle = makeStyles({
  resumeInput: {
    maxWidth: '320px',
    boxShadow: '0 0 0.5cm #7b7d7d',
    background: 'white',
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '10'
  }
});

export const ResumeInput = () => {
  const {content} = useContext(ResumeContext);
  const classNames = userStyle();

  useEffect(()=>{
    console.log(content);
  },[content]);

  return (
    <div className={classNames.resumeInput}>
      <Header />
      <Navbar />
      <Sections />
    </div>
  );
}
