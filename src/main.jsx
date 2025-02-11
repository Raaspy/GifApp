import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GiftApp from './components/GiftApp';
import './assets/styles/StyleGlobal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftApp />
  </StrictMode>,
)
