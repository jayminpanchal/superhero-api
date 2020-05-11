import React from 'react';
import { Provider } from "react-redux";
import store from "../src/store";
import AppRouter from "../src/router"

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>

  );
}

export default App;
