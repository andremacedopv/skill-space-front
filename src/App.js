import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/Global';
import Router from './Routes';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="site-content">  
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
