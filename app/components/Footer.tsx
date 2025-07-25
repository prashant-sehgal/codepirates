import React from 'react';
import Copyright from './Copyright';
import PromptBox from './PromptBox';

export default function Footer() {
  return (
    <div className="fixed bottom-0 p-2 w-full flex flex-col gap-1 bg-stone-950">
      <PromptBox />
      <Copyright />
    </div>
  );
}
