import React from 'react';

import './App.css';
import DraggableImg from './draggable-img';
import DraggableText from './draggable-text';
import { DraggableArrowLeft, DraggableArrowRight } from './draggable-arrow';

const data = [
  { type: 'img', value: "https://lh3.googleusercontent.com/proxy/VoU-FDT1XUDyuU6Q8FJObiajgGv_CIiYsKR9TWrNNrPyy4xeyBWl99_x60CdThATdKkUO9WG748RG8vb9Z_Lq17rXOKR50tsCyP-UBaZ11o-SRg" },
  { type: 'text', value: "IF" },
  { type: 'text', value: "THEN" },
  { type: 'text', value: "ELSE" },
];


function App() {
  const [localData, setLocalData] = React.useState(data);
  const [value, setValue] = React.useState("");

  const addIf = () => {
    setLocalData(x => [...x, { type: 'text', value: 'IF' }]);
  }

  const addElse = () => {
    setLocalData(x => [...x, { type: 'text', value: 'ELSE' }]);
  }

  const addText = () => {
    setLocalData(x => [...x, { type: 'text', value }]);
  }

  const addArrowLeft = () => {
    setLocalData(x => [...x, { type: 'arrow', value: 'left' }]);
  }

  const addArrowRight = () => {
    setLocalData(x => [...x, { type: 'arrow', value: 'right' }]);
  }

  const exportImg = () => {
    
  }

  return (
    <div className="App">
      <div>
        <button onClick={addIf}>Add If</button>
        <button onClick={addElse}>Add Else</button>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={addText}>Add Text</button>
        <button onClick={addArrowLeft}>&#8592;</button>
        <button onClick={addArrowRight}>&#8594;</button>
        <button onClick={exportImg}>Export Img</button>
      </div>
      <div>
        {localData.map(x => {
          if (x.type === 'text') {
            return <DraggableText value={x.value} />
          }

          if (x.type === 'img') {
            return <DraggableImg value={x.value} />
          }
          if (x.type === 'arrow' && x.value === 'left') {
            return <DraggableArrowLeft />
          }

          if (x.type === 'arrow' && x.value === 'right') {
            return <DraggableArrowRight />
          }

        })}

      </div>
    </div>
  );
}

export default App;
