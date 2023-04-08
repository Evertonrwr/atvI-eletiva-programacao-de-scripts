import React, { useContext, useEffect, useState } from 'react';
import LotoFacil from './components/LotoFacil';
import MegaSena from './components/MegaSena';
import { Provider } from "./contexts"
import useJogo from './hooks/JogoHook';
import LoadingPage from './components/LoadingPage';

function App() {

  return (
    <Provider>
      <MegaSena />
      <LoadingPage />
      <LotoFacil />

    </Provider>
  );
}

export default App;
