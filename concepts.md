## One way data flow
- **Ingest**: Data from external sources
- **Transform**: Transform data
- **Load**: Load data into the database
### Hooks
**create and update state**
- [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
```js
    const [state, setState] = useState('');
```

**handes changes outside of your component**
It is used for managing side effects, such as data fetching (usually API requests), subscriptions, or event listeners. It
runs after the rendering process and can be cleaned up with the `useEffect` return value.

-[useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)

```js
    useEffect(() => {
        // run side effect
    }, []);
```
- ```useEffect(() => { /* effect */ }, []):``` Runs the effect only once, after the initial render.
```useEffect(() => { /* effect */ }, [dep1, dep2, ...]):``` Runs the effect after the initial render and again whenever any dependency in the array changes.

- ```useEffect(() => { /* effect */ }):``` Runs the effect after every render.

This dependency array is a powerful feature because it allows you to optimize performance by controlling when your effects run.


## Error boundaries

[React Error Boundaries](https://reactjs.org/docs/error-boundaries.html) to handle errors in your application.

An error boundary is a React component that can catch errors in its children and display a fallback UI.

### Error Handling
* Key features:
    - Catch errors that occur in child components.
    Prevent erros from propagating to parent components (up the components tree).
    - Display a fallback UI.
    - Log errors to an error reporting service.
    - Display error messages to users.

One of the use cases is to create a class component and in the componentDidCatch catch the error.

### React Modal

React Modal is a React component library for creating customizable and accessible modals. It provides an easy-to-use API to manage modal dialogs, allowing developers to define content, behavior, and styling. Key features include:

- Easy integration into React apps
- Accessibility compliance with ARIA attributes
- Customizable animations and styles
- Event handling for opening and closing modals
- Compatibility with server-side rendering (SSR)
At its core, React Modal operates by manipulating the React component tree, ensuring that modals are rendered and managed within the context of the application's state and lifecycle. It supports a variety of features essential for modern web applications, such as accessibility compliance through ARIA attributes, customizable animations, and event handling mechanisms for opening, closing, and interacting with the modal content.

React Modal simplifies adding interactive pop-up dialogs to applications, making it a flexible and robust tool for developers.
