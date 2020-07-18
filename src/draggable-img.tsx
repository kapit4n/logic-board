import React from 'react';
import Draggable from 'react-draggable';

interface EventE {
    deltaX: number;
    deltaY: number;
}

interface ImgProps {
    value: string;
}

export default function DraggableImg({ value }: ImgProps) {
    const [activeDrags, setActiveDrags] = React.useState(0);
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
        <img className="handle" style={{ width: 100, height: 100 }} src={value} />
    </Draggable>)
}