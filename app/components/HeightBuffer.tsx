import React from 'react';

export default function HeightBuffer(props: Readonly<{ height: number }>) {
  return <div style={{ height: `${props.height}rem` }}></div>;
}
