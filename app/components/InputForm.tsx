'use client';
import React from 'react';
import { usePrompt } from '../contexts/PromptContext';

export default function InputForm() {
  const { query, setQuery, submitQuery } = usePrompt();

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitQuery();
  }

  return (
    <form className="w-full" onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Ask about your favorite tech"
        className="text-sm outline-none w-full bg-stone-900 h-11 px-4 rounded-md hover:bg-stone-800 focus:bg-stone-800"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
}
