import React from 'react';

export default function PrimaryButton(
  props: Readonly<{ children: React.ReactNode; onPress: () => void }>
) {
  return (
    <button
      onClick={() => props.onPress()}
      className="bg-white text-stone-950 text-xs px-5 py-2.6 cursor-pointer rounded-md transition duration-100 ease-in-out hover:opacity-90"
    >
      {props.children}
    </button>
  );
}
