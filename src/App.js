import React from 'react';
import './App.css';
import { ResumeInput } from './components/ResumeInput/ResumeInput'
import { ResumeOutput } from './components/ResumeOutput/ResumeOutput';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function App() {
  return (
    <div className="App">
      <ResumeInput />
      <ResumeOutput />
    </div>
  );
}

export default App;
