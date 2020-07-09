import App from "./App";
import React from 'react';
import ReactRough, { Rectangle } from 'react-rough';

function Board() {
    return <ReactRough>
        <Rectangle x={15} y={15} width={90} height={80} fill="red" />
    </ReactRough>;
}

export default Board;