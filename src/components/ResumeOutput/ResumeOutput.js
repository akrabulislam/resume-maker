import React from 'react';
import './style.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomOut from '@mui/icons-material/ZoomOut';
import ZoomIn from '@mui/icons-material/ZoomIn';
import Restore from '@mui/icons-material/Restore';

export const ResumeOutput = () => {
  return (
    <div className='resume-output-wrapper'>
      <TransformWrapper initialScale={1}
        initialPositionX={0}
        initialPositionY={0}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tool">
              <button onClick={() => zoomIn()}><ZoomIn /></button>
              <button onClick={() => zoomOut()}><ZoomOut /></button>
              <button onClick={() => resetTransform()}><Restore/></button>
            </div>
            <TransformComponent>
              <div className='resume-output'>
                <div >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
              </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
