import React from 'react';

export default function IconButton(
  props: Readonly<{ icon: string; onPress: () => void }>
) {
  return (
    <button
      className={`${props.icon} h-11 w-11 rounded-md cursor-pointer bg-stone-900 hover:bg-stone-800`}
      onClick={() => props.onPress()}
    />
  );
}
