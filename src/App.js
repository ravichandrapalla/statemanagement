import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

import Homepage from "./components/Homepage";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
