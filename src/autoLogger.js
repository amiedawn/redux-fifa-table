export default function autoLogger() {
  return (createStore) => (postReducer, initialState, enhancer) => {
    const store = createStore(postReducer, initialState, enhancer);
    function dispatch(action) {
      console.log(`Dispatch an action: ${JSON.stringify(action)}`);
      const res = store.dispatch(action);
      return res;
    }
    return { ...store, dispatch };
  };
};
