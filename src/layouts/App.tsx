import { BrowserRouter} from 'react-router-dom';
import { Main } from './Main';
import { Footer } from './Footer/Footer';

import './App.scss';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
          <Main/>   
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
