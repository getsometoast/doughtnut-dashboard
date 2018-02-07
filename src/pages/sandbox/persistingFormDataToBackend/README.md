## Persisting Form Data to Backend Spike
I needed to know how to collect user entered data and POST it to an api using react / redux.  For the purpose of the spike I've used json-server to give me an endpoint I can post to.  To run the server from the root of the project run the following command:

```
json-server --watch ./src/pages/sandbox/mock-server/db.json --port 3001
```

## Links to pages I read for the spike
- [How connect works for higher order containers](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)
- [Info on local component state and component lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Info on export default](https://github.com/mobxjs/mobx/issues/1043)
- [Background on using component will receive props to react to prop updates](https://github.com/reactjs/react-redux/issues/291)
- [Correct usage of ownProps in mapstatetoprops](https://github.com/reactjs/redux/issues/693)
- [Info on reacts reconciliation algorithm](https://stackoverflow.com/questions/29074690/react-why-components-constructor-is-called-only-once)
- [React actions explained](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f)
- [React / Redux cheat sheet](https://medium.com/@javascript_7596/react-redux-concept-workflow-cheatsheet-be00e3ffa853)
- [How to store / add to an array in reducer](https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux)
- [Docs on actions and dispatching them](https://redux.js.org/docs/basics/Actions.html)