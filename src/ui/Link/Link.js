import React from 'react'

export const SimpleLink = ({text,url,styleClass,clickEvent}) => {
  return (
    <a className={styleClass} href={url} onClick={clickEvent}>{text}</a>
  );
}
