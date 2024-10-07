import React from "react";

interface Props extends React.PropsWithChildren {
  type: "primary" | "success" | "danger" | "warning";
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  return (
    <div className={`alert alert-${type} d-flex justify-content-between`}>
      {children}
      <button
        type="button"
        className="btn btn-close"
        onClick={onDismiss}
        style={{ display: onDismiss ? "block" : "none" }}
      />
    </div>
  );
};

export default Alert;
