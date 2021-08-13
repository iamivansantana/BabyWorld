import React from 'react';
import BabyWorldApp from './components/BabyWorldApp';
import ModalState from './context/modalContext/modalState';


function App() {

  return (
      <>
      <ModalState >
        <BabyWorldApp />
      </ModalState>
      </>
  );
}

export default App;
