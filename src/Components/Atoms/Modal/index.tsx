import ReactModal, { Props, Styles } from "react-modal";

const customStyles: Styles = {
  content: {
    maxWidth: 600,
    height: "fit-content",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: 32,
  },
  overlay: {
    backdropFilter: "blur(5px)",
    background: "rgba(0, 0, 0, 0.75)",
  },
};
export const Modal = (props: Props) => {
  return <ReactModal {...props} style={customStyles} />;
};
