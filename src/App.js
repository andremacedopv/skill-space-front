import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/Global';
import Router from './Routes';
import UserProvider from "./contexts/useUserContext";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <div className="site-content">  
          <Router />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
