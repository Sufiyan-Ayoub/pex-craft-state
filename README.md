# @pex-craft/state


[![npm version](https://img.shields.io/npm/v/@pex-craft/state)](https://www.npmjs.com/package/@pex-craft/state)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@pex-craft/state)](https://bundlephobia.com/package/@pex-craft/state@1.0.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/Sufiyan-Ayoub/state/blob/main/LICENSE)


A versatile state management library for React and Next.js.

## Installation

```bash
npm install @pex-craft/state

```

## Overview

`@pex-craft/state` provides a set of utilities for state management in your React or Next.  js applications. It includes the following key features:

1.`Provider`: Initialize and manage the application state.

2.`useStore`: Retrieve specific properties from the state.

3.`useDispatch`: Update the application state.

## Usage
### Provider
`Provider` is used to initialize the state. It takes an initialState prop, allowing you to pass any type of values.

All the app content, including children and any other data, is managed within `Provider`.

```tsx
import { Provider } from "@pex-craft/state";

/* `Example usage` */
<Provider initialState={
    {
        app: {
            debug: true,
            anyTypeOfKey: 'anyTypeOfValue'// such as Object,Array,number etc.
        }
    }
}>
  {children}
</Provider>

```

### useStore

useStore is a hook used to retrieve a specific property from the state.
Its give an callback that return the specific property from state according to key.

```tsx

import { useStore } from "@pex-craft/state";

// `Example usage`
const { debug } = useStore(state =>  state.app);

console.log(debug)
/* output in console.log */ 
true // --->debug-->value

```

### useDispatch
`useDispatch` is a hook used to update the state.
Its takes key of the state object  to get the value of key that is in the state

```tsx

import { useDispatch } from "@pex-craft/state";

// Example usage
const dispatch = useDispatch(`app`);
dispatch({ app: { debug: false } });

```
