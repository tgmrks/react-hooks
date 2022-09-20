### `git switch <branch>`

Switch to a branch to check an example for important hooks in React and basic concepts.

### List of branches: 
```
main
context
state
props
useEffect
useLayoutEffect
useReducer
useRef
```

## main
Plain project to start new branches.

## context
This example shows how to use Context API as a hook. Context API is a way to manage and share states among components instead of passing them  as props. 

## state
Managing states in class component and function component.

## props
How to pass props down to a child class component and child function component.

## useEffect
It allows to perform side effects to the component. For example, fetching data, directly updating DOM, timers. 

It expect two arguments: a function to apply execute the side effect and  dependencies to determine what to listen to:

```
useEffect(<function>, <dependency>)
```
* no dependency: executes every time a state is updated.
* if empty [ ]: executes only once.
* one or many: executes when one of the states informed update.

## useLayoutEffect
Similar to *useEffect*, but it executes before the layout is rendered. It is synchronous, meaning that the component will only render after useLayoutEffect executes. While *useEffect* is asynchronous.

It is useful to avoid excessive re-rendering, forcing some data to be ready before the layout renders. 

## useReducer
It allows for a custom logic useful when managing complex states and helps to condense several states under one function. 

## useRef
It allows to persist value between renders and can be used to store mutable values (not a state). Useful to access DOM elements directly. 

## Router
React Router is a solution for page routing. It's not in Create React App, it must be added to you project: 
```
yarn add react-router-dom
```