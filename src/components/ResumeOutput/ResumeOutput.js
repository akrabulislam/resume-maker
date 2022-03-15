import React ,  { useRef } from 'react';
import './style.css';
import { ActualResume } from './ActualResume';
import PrintComponent from './PrintComponent';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomOut from '@mui/icons-material/ZoomOut';
import ZoomIn from '@mui/icons-material/ZoomIn';
import Restore from '@mui/icons-material/Restore';
import { useReactToPrint } from 'react-to-print';

export const ResumeOutput = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='resume-output-wrapper'>
      <TransformWrapper initialScale={0.3}
        limitToBounds={false}
        centerOnInit={true}
        minScale={0.3}
        maxScale={2}
        centerZoomedOut={false}
        >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tool">
              <button onClick={() => zoomIn("425", 1000)}><ZoomIn style={{ color: 'gray' , fontSize : '20px' }}/></button>
              <button onClick={() => zoomOut("425", 1000)}><ZoomOut style={{ color: 'gray' , fontSize : '20px'}}/></button>
              {/* <button onClick={() => resetTransform(1000)}><Restore style={{ color: 'gray' ,fontSize : '20px' }}/></button> */}
              <button onClick={handlePrint}><PrintComponent /></button>
            </div>
            <TransformComponent>
              <ActualResume ref={componentRef}/>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
