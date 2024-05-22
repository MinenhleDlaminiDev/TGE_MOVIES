import './App.css';
import AllRoutes from "./Routes/AllRoutes";
import { Header } from './components';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='app'>
        <Header />
        <AllRoutes />
      </div>
    </GlobalProvider>
  );

}

export default App;
