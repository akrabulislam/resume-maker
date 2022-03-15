import React,{useState} from 'react'
import { Templates } from './SectionsList/Templates';
import { Colors } from './SectionsList/Colors';

function RenderActualComponent(value) {
  switch (value) {
    case 0:
      return <Templates />;
      break;
    default:
      return <Colors />
      break;
  }
}

export const Sections = () => {
  const [currentActiveOption,setCurrentActiveOption] = useState(0);
  return (
    <div className='sections' style={{direction: 'rtl'}}>
      {RenderActualComponent(currentActiveOption)}
    </div>
  );
}
