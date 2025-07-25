'use client';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';

interface TypePromptContext {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  submitQuery: () => void;
}

const PromptContext = createContext<TypePromptContext | undefined>(undefined);

export default function PromptProvider(
  props: Readonly<{ children: React.ReactNode }>
) {
  const [query, setQuery] = useState('');

  const submitQuery = useCallback(
    function () {
      console.log(`[LOG] Query: ${query}`);
    },
    [query]
  );

  return (
    <PromptContext.Provider value={{ query, setQuery, submitQuery }}>
      {props.children}
    </PromptContext.Provider>
  );
}

export function usePrompt() {
  const context = useContext(PromptContext);
  if (!context)
    throw new Error(
      `[PromptContext] usePrompt() must be used within a <PromptProvider>. Ensure that your component is wrapped in <PromptProvider> in the component tree.`
    );

  return context;
}
