import React from 'react';
import InputForm from './InputForm';
import Actions from './Actions';

export default function PromptBox() {
  return (
    <div className="flex rounded-md w-full max-w-200 gap-1 m-auto">
      <InputForm />
      <Actions />
    </div>
  );
}
