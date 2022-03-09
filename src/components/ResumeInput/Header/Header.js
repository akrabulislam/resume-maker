import React from 'react'
import Logo from '../../../assets/resume-logo-3.png';
import { makeStyles } from '@mui/styles';

const userStyle = makeStyles({
  myHeader : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    width : '100%',
    justifyContent : 'space-between',
    padding : '10px',
    fontFamily : "Montserrat', sans-serif!important"
  },myBtn : {
    padding : '5px 10px',
    background : '#1976d2',
    fontFamily : "'Montserrat', sans-serif!important",
    display : 'block',
    color : 'white',
    borderRadius : '5px',
    fontSize : '14px'
  }
});

export const Header = () => {
  const classNames = userStyle();
  return (
    <div className={classNames.myHeader}>
      <img src={Logo} alt="" style={{width : '115px'}}/>
      <button className={classNames.myBtn}>Example</button>
    </div>
  );
}
