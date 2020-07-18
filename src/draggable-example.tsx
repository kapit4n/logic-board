import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './App.css';

interface EventE {
  deltaX: number;
  deltaY: number;
}

export default class DraggableExample extends React.Component {

  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

  handleDrag = (e: Object, ui: EventE) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };


  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div style={{ width: 200, height: 200 }}>
        <Draggable
          handle=".handle"
          grid={[25, 25]}
          scale={1}
          {...dragHandlers}
        >
          <div className="handle">
            <img style={{ width: 100, height: 100 }} src="https://i.ytimg.com/vi/XUyBGgbtFe4/maxresdefault.jpg" />
          </div>
        </Draggable>

        <Draggable
          handle=".handle"
          grid={[25, 25]}
          scale={1}
          {...dragHandlers}
        >
          <div >
            <img className="handle" style={{ width: 100, height: 100 }} src="https://marlacummins.com/wp-content/uploads/2017/12/problems-1.jpg" />
          </div>
        </Draggable>

        <Draggable
          handle=".handle"
          grid={[25, 25]}
          scale={1}
          {...dragHandlers}
        >
          <div className="handle">
            <img style={{ width: 100, height: 100 }} src="data:image/jpeg;base64,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" />
          </div>
        </Draggable>

        <Draggable
          handle=".handle"
          grid={[25, 25]}
          scale={1}
          {...dragHandlers}
        >
          <div className="handle">
            <img style={{ width: 100, height: 100 }} src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/topofmind_motivation.jpg" />
          </div>
        </Draggable>

      </div>
    )
  }
}