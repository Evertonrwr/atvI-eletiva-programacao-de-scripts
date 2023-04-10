import { Provider } from "./contexts"
import Home from './pages/Home';

function App() {

  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
