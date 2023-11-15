import "./App.css";
import MovieFinder from "./pages/MovieFinder";
import store from "./redux/store";
import { Provider } from "react-redux";

// import Homepage from "./components/Homepage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">{<MovieFinder />}</div>
    </Provider>
  );
}

export default App;
