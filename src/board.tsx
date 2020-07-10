import React from 'react';
import ReactRough, { Rectangle, Circle, Polygon, Arc, Path, Ellipse } from 'react-rough';
import { RoughNotation } from "react-rough-notation";

/* 
<Rectangle x={15} y={15} width={90} height={80} fill="blue" />
      <Circle diameter={80} fill="rgba(202, 122, 98, 0.7)" x={80} y={50} />
      <Polygon fill="green" points={[[490, 130], [590, 120], [550, 160], [490, 200]]} />
      <Arc closed fill="red" height={180} start={3.141592653589793} stop={5.026548245743669} width={200} x={350} y={300} />
      <Path d="M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z" stroke="red" />
      <Ellipse height={80} width={150} x={100} y={100} /> */

function CreateIf({ x, y, fill }: { x: number, y: number, fill: string }) {
  return (
    <Polygon fill={fill} points={[[100 * 0.3 + x - 30, 300 * 0.3 + y - 30], [300 * 0.3 + x - 30, 500 * 0.3 + y - 30],
    [500 * 0.3 + x - 30, 300 * 0.3 + y - 30], [300 * 0.3 + x - 30, 100 * 0.3 + y - 30]]} />
  );
}

function CreateResult({ x, y, fill }: { x: number, y: number, fill: string }) {
  return <Rectangle x={x} y={y} width={120} height={40} fill={fill} />

}

function Board() {
  const x = 10;
  const y = 10;
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', width: 300, padding: '0 30rem' }}>
        <RoughNotation type="underline" show={true}> If </RoughNotation>
        <ReactRough height={180} width={120}>
          <CreateIf x={0} y={0} fill="black" />
        </ReactRough>
        <RoughNotation type="underline" show={true}> then </RoughNotation>
        <ReactRough height={180} width={120}>
          <CreateResult x={0} y={0} fill="green" />
        </ReactRough>
        <RoughNotation type="underline" show={true}> else </RoughNotation>
        <ReactRough height={180} width={120}>
          <CreateResult x={0} y={0} fill="red" />
        </ReactRough>
        <RoughNotation type="underline" show={true}> Final </RoughNotation>
        <ReactRough height={180} width={120}>
          <CreateResult x={0} y={0} fill="blue" />
        </ReactRough>
      </div>
    </>
  );
}

export default Board;