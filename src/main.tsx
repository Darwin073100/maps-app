import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MapsApp } from './MapsApp.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

if( !navigator.geolocation ){
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
