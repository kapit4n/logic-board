import React from 'react';
import Draggable from 'react-draggable';

interface EventE {
    deltaX: number;
    deltaY: number;
}

interface IArrow {
    onRemove(): void;
}

export function DraggableArrowLeft({ onRemove }: IArrow) {

    const [activeDrags, setActiveDrags] = React.useState(0);
    const [visible, setVisible] = React.useState(false);
    const [deltaPosition, setDeltaPosition] = React.useState({ x: 0, y: 0 });

    const handleDrag = (e: Object, ui: EventE) => {
        const { x, y } = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        })
    };

    const onStart = () => {
        setActiveDrags(activeDrags + 1);
    };

    const onStop = () => {
        setActiveDrags(activeDrags - 1);
    };

    return (<Draggable
        handle=".handle"
        grid={[25, 25]}
        scale={1}
        onStart={onStart}
        onStop={onStop}
        onDrag={handleDrag}
    >
        <div style={{ fontSize: '5rem' }} className="handle" onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
            {visible && (
                <button style={{ float: 'right', background: 'transparent', cursor: 'pointer' }} onClick={onRemove}>&#128465;</button>
            )}
        &larr;
        </div>

    </Draggable>)
}

export function DraggableArrowRight({ onRemove }: IArrow) {
    const [activeDrags, setActiveDrags] = React.useState(0);
    const [visible, setVisible] = React.useState(false);
    const [deltaPosition, setDeltaPosition] = React.useState({ x: 0, y: 0 });

    const handleDrag = (e: Object, ui: EventE) => {
        const { x, y } = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        })
    };

    const onStart = () => {
        setActiveDrags(activeDrags + 1);
    };

    const onStop = () => {
        setActiveDrags(activeDrags - 1);
    };

    return (<Draggable
        handle=".handle"
        grid={[25, 25]}
        scale={1}
        onStart={onStart}
        onStop={onStop}
        onDrag={handleDrag}
    >
        <div style={{ fontSize: '5rem' }} className="handle" onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
            {visible && (
                <button style={{ float: 'right', background: 'transparent', cursor: 'pointer' }} onClick={onRemove}>&#128465;</button>
            )}
            &rarr;
        </div>

    </Draggable>)
}
