import './App.css';
import Modal from './UI/Modal/Modal.tsx';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onModalClick = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="container m-5">
      <Modal show={showModal} title="Modal title" onModalClick={onModalClick}>
        <p className="ps-3">Example static text</p>
      </Modal>
      <button className="btn btn-dark text-white" onClick={onModalClick}>
        First task
      </button>
    </div>
  );
};

export default App;
