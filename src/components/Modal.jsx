import { useNavigate } from "react-router";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
