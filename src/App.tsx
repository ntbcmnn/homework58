import "./App.css";
import Modal from "./UI/Modal/Modal.tsx";
import { useState } from "react";
import Alert from "./UI/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(true);
  const [showSuccess, setShowSuccess] = useState<boolean>(true);

  const onModalClick = (): void => {
    setShowModal((prevState) => !prevState);
  };

  const closeAlert = (): void => {
    setShowWarning((prevState) => !prevState);
  };

  const showAllAlerts = (): void => {
    setShowWarning(true);
    setShowSuccess(true);
  };

  return (
    <div className="container m-5 ">
      <div className="d-flex justify-content-center gap-4 mb-4">
        <button type="button" className="btn btn-dark" onClick={onModalClick}>
          Show modal
        </button>

        <button type="button" className="btn btn-light" onClick={showAllAlerts}>
          Show alerts
        </button>
      </div>

      <Modal show={showModal} title="Modal title" onModalClick={onModalClick}>
        <p className="ps-3">Example static text</p>
      </Modal>

      {showWarning && (
        <Alert type="warning" onDismiss={closeAlert}>
          Warning type alert
        </Alert>
      )}

      {showSuccess && <Alert type="success">Success type alert</Alert>}
    </div>
  );
};

export default App;
