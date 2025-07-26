'use client';
import React from 'react';
import { usePrompt } from '../contexts/PromptContext';
import SecondaryButton from './SecondaryButton';

export default function Actions() {
  const { query, submitQuery } = usePrompt();

  if (query.length > 0)
    return (
      <SecondaryButton className="w-11" onPress={submitQuery}>
        <i className="ri-send-plane-2-fill"></i>
      </SecondaryButton>
    );

  return (
    <SecondaryButton className="w-11" onPress={() => console.log('mic')}>
      <i className="ri-mic-line"></i>
    </SecondaryButton>
  );
}
