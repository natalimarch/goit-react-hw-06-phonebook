import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Phonebook />
      </div>
    </Provider>
  );
}

export default App;
