import React from "react";
import Backdrop from "./Backdrop/Backdrop.tsx";
import { IModal } from "../../../types";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onModalClick: () => void;
}

const Modal: React.FC<Props> = ({ show, title, onModalClick, children }) => {
  const modalButtons: IModal[] = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert("Continue clicked"),
    },
    {
      type: "danger",
      label: "Close",
      onClick: onModalClick,
    },
  ];

  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <div className="modal-header justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn btn-close" onClick={onModalClick}></button>
            </div>
            <div className="d-flex flex-column pt-3">
              {children}
            </div>
            <div className="modal-footer justify-content-center gap-4">
              {modalButtons.map((btn, index) => (
                <button
                  type="button"
                  key={index}
                  className={`btn btn-${btn.type}`}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;