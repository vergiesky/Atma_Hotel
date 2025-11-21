import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function alertSuccess(title, text) {
  return MySwal.fire({
    icon: "success",
    title,
    text,
  });
}

export function alertError(title, text) {
  return MySwal.fire({
    icon: "error",
    title,
    text,
  });
}

export function alertWarning(title, text) {
  return MySwal.fire({
    icon: "warning",
    title,
    text,
  });
}

export default MySwal;