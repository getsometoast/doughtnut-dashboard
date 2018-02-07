# Persisting Form Data to Backend Spike
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
- [Docs on async actions](https://redux.js.org/docs/advanced/AsyncActions.html)
- [How to manage state in react](https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c)
- [Docs on organising state in react](https://redux.js.org/docs/faq/OrganizingState.html)
- [Docs on splitting logic](https://redux.js.org/docs/faq/CodeStructure.html#structure-business-logic)
- [Background on async actions and thunk](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
- [Good usage patterns in React](http://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/)
- [How to push to the history object](https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4)
- [Info on conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Background on Redux](https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react)
- [Action creators best practices](https://github.com/reactjs/redux/issues/1171)
- [Cotainer Component Pattern](https://medium.com/@learnreact/container-components-c0e67432e005)
- [What is redux?](https://quickleft.com/blog/redux-plain-english-workflow/)
- [Explanation of connect function](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)
- [Good example repo](https://github.com/rajaraodv/react-redux-blog/blob/8e5c6d490b73a6355a1a3feacb99860725845830/public/src/store/configureStore.js)
