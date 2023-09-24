import { toast } from "react-toastify";

export const toastNotify = (text: string, type?: string) => {
  switch (type) {
    case "info":
      toast.info(text);
      break;
    case "success":
      toast.success(text);
      break;
    default:
      toast.error(text);
      break;
  }
};
