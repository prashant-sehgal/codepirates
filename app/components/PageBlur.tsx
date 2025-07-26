import React from 'react';

export default function PageBlur(
  props: Readonly<{ children: React.ReactNode }>
) {
  return (
    <div className="z-101 absolute top-0 bottom-0 left-0 right-0 p-2 bg-stone-950/10 backdrop-blur-md shadow-lg flex justify-center items-center">
      {props.children}
    </div>
  );
}
