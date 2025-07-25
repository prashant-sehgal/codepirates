'use client';
import React from 'react';
import IconButton from './IconButton';
import { usePrompt } from '../contexts/PromptContext';

export default function Actions() {
  const { query, submitQuery } = usePrompt();

  if (query.length > 0)
    return (
      <IconButton icon="ri-send-plane-2-fill" onPress={() => submitQuery()} />
    );

  return <IconButton icon="ri-mic-line" onPress={() => ''} />;
}
