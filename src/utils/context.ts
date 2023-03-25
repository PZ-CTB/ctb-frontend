// Wrapper function for React.createContext to appease Typescript.
// Will only throw error if used outside provider.

import React from 'react';

export function createContext<
  T extends unknown | null,
  TOptional extends true | undefined = undefined
>(name?: string, optional?: TOptional) {
  const context = React.createContext<T | undefined>(undefined);

  function useContext(): TOptional extends true ? T | undefined : T {
    const c = React.useContext(context);

    if (c === undefined && !optional) {
      throw new Error(`No context value found. Missing provider ${name}?`);
    }

    return c as TOptional extends true ? T | undefined : T;
  }

  return [useContext, context.Provider] as const;
}
