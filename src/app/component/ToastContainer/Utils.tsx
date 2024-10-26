import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sToast = (msg: string) => {
  toast.success(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
  });
};

const eToast = (msg: string) => {
  toast.error(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
  });
};
const Utility = { sToast, eToast };

export default Utility;
