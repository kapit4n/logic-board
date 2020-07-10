import React from 'react';
import ReactRough, { Rectangle, Circle, Polygon, Arc, Path, Ellipse } from 'react-rough';

function Board() {
    return (<ReactRough height={600} width={600}>
        <Rectangle x={15} y={15} width={90} height={80} fill="blue" />
        <Circle diameter={80} fill="rgba(202, 122, 98, 0.7)" x={80} y={50} />
        <Polygon fill="green" points={[[490, 130], [590, 120], [550, 160], [490, 200]]} />
        <Arc closed fill="red" height={180} start={3.141592653589793} stop={5.026548245743669} width={200} x={350} y={300} />
        <Path d="M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z" stroke="red" />
        <Ellipse height={80} width={150} x={100} y={100} />
    </ReactRough>);
}

export default Board;