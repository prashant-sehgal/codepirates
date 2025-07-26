import React from 'react';

export default function SecondaryButton(
  props: Readonly<{
    children: React.ReactNode;
    className?: string;
    onPress: () => void;
  }>
) {
  return (
    <button
      className={`${props.className} rounded-md cursor-pointer bg-stone-900 hover:bg-stone-800 flex justify-center items-center`}
      onClick={() => props.onPress()}
    >
      {props.children}
    </button>
  );
}
