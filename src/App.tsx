import React from 'react';

import html2canvas from 'html2canvas';

import './App.css';
import DraggableImg from './draggable-img';
import DraggableText from './draggable-text';
import { DraggableArrowLeft, DraggableArrowRight } from './draggable-arrow';

const data = [
  { id: Math.random() * (10000 - 10) + 10, type: 'img', value: "https://lh3.googleusercontent.com/proxy/VoU-FDT1XUDyuU6Q8FJObiajgGv_CIiYsKR9TWrNNrPyy4xeyBWl99_x60CdThATdKkUO9WG748RG8vb9Z_Lq17rXOKR50tsCyP-UBaZ11o-SRg" },
  { id: Math.random() * (10000 - 10) + 10, type: 'text', value: "IF" },
  { id: Math.random() * (10000 - 10) + 10, type: 'text', value: "THEN" },
  { id: Math.random() * (10000 - 10) + 10, type: 'text', value: "ELSE" },
];


function App() {
  const [localData, setLocalData] = React.useState(data);
  const [value, setValue] = React.useState("");

  const removeItem = (id: number) => {
    setLocalData(x => x.filter(y => y.id !== id))
  }

  const getrandomId = () => {
    return Math.random() * (10000 - 10) + 10
  }

  const addIf = () => {
    setLocalData(x => [...x, { id: getrandomId(), type: 'text', value: 'IF' }]);
  }

  const addElse = () => {
    setLocalData(x => [...x, { id: getrandomId(), type: 'text', value: 'ELSE' }]);
  }

  const addThen = () => {
    setLocalData(x => [...x, { id: getrandomId(), type: 'text', value: 'THEN' }]);
  }

  const addText = () => {
    setLocalData(x => [...x, { id: getrandomId(), type: 'text', value }]);
  }

  const addArrowLeft = () => {
    setLocalData(x => [...x, { id: getrandomId(), type: 'arrow', value: 'left' }]);
  }

  const addArrowRight = () => {
    setLocalData(x => [...x, { id: getrandomId(), type: 'arrow', value: 'right' }]);
  }

  const exportImg = () => {
    const input = document?.body;
    if (input != null) {
      html2canvas(input, {
        useCORS: true
      })
        .then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          let a = document.createElement('a');
          document.body.appendChild(a);
          a.setAttribute('style', 'display: none');
          a.href = imgData;
          a.download = 'download.png';
          a.click();
          window.URL.revokeObjectURL(imgData);
          a.remove();
        });
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={addIf}>IF</button>
        <button onClick={addElse}>ELSE</button>
        <button onClick={addThen}>THEN</button>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={addText}>Add Text</button>
        <button onClick={addArrowLeft}>&#8592;</button>
        <button onClick={addArrowRight}>&#8594;</button>
        <button onClick={exportImg}>Export Img</button>
      </div>
      <div>
        {localData.map(x => {
          if (x.type === 'text') {
            return <DraggableText value={x.value} key={x.id} onRemove={() => removeItem(x.id)} />
          }

          if (x.type === 'img') {
            return <DraggableImg value={x.value} key={x.id} onRemove={() => removeItem(x.id)} />
          }
          if (x.type === 'arrow' && x.value === 'left') {
            return <DraggableArrowLeft key={x.id} onRemove={() => removeItem(x.id)} />
          }

          if (x.type === 'arrow' && x.value === 'right') {
            return <DraggableArrowRight key={x.id} onRemove={() => removeItem(x.id)} />
          }

        })}

      </div>
    </div>
  );
}

export default App;
