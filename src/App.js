import React from 'react';
import './App.css';
import { ResumeInput } from './components/ResumeInput/ResumeInput'
import { ResumeOutput } from './components/ResumeOutput/ResumeOutput';
import { ResumeOptions } from './components/ResumeOptions/ResumeOptions.js';
import { ResumeContextProvider } from './contexts/ResumeContext';


function App() {
  return (
    <ResumeContextProvider >
      <div className="App">
        <ResumeInput />
        <ResumeOutput />
        <ResumeOptions />
      </div>
    </ResumeContextProvider>
  );
}

export default App;
