import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Cursor from './components/Common/Cursor';
import IntroLoader from './components/Common/IntroLoader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <IntroLoader/>
      <Cursor/>
      <App/>
    </BrowserRouter>
  </StrictMode>
)
