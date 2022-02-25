import { BrowserRouter, HashRouter} from 'react-router-dom';
import { Main } from './Main';
import { Footer } from './Footer/Footer';

import './App.scss';

function App() {

  
 
  return (
    <div className="App">
      <HashRouter>
          <Main/>   
          <Footer />
        </HashRouter>
      </div>
  );
}

export default App;
