export interface IModalButton {
  type: "primary" | "danger";
  label: string;
  onClick: () => void;
}
