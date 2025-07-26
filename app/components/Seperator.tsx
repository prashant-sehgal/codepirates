import React from 'react';

export default function Seperator() {
  return (
    <div className="flex items-center my-6">
      <div className="flex-grow border-t border-stone-700"></div>
      <span className="flex-shrink mx-4 text-stone-400">OR</span>
      <div className="flex-grow border-t border-stone-700"></div>
    </div>
  );
}
