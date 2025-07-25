import React from 'react';

export default function InputForm() {
  return (
    <input
      type="text"
      placeholder="Ask about your favorite tech"
      className="text-sm outline-none w-full bg-stone-900 h-11 px-4 rounded-md hover:bg-stone-800 focus:bg-stone-800"
    />
  );
}
