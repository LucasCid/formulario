/* eslint-disable no-unused-vars */
import './App.css';
import Formulario from './components/Formulario';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';


library.add(fas);


function App() {
  return (
    <>
      <Formulario />
    </>
  );
}
export default App;

