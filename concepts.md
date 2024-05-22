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


