import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { EMAIL_REGEX } from "../../constants";
import InputField from "./input-field";

import classes from "./styles.module.css";

const Modal = ({ onClose, onConfirm, userDetail }) => {
  const [formData, setFormData] = useState(userDetail);
  const containerRef = useRef();

  useEffect(() => {
    const listener = (event) => {
      if (containerRef.current && containerRef.current.contains(event.target)) {
        return;
      }
      onClose();
    };

    window.addEventListener("mousedown", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const confirmHandler = () => {
    for (const prop in formData) {
      if (formData[prop] === "") {
        return;
      }
    }
    if (!formData.mail.match(EMAIL_REGEX)) {
      return;
    }
    for (const prop in formData) {
      if (typeof formData[prop] === "string") {
        formData[prop] = formData[prop].trim();
      }
    }
    if (!formData.site.includes("http://")) {
      formData.site = "http://" + formData.site;
    }
    onConfirm(userDetail.id, formData);
    onClose();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal} ref={containerRef}>
        <div className={classes.modalHeader}>
          <h3 className={classes.modalHeaderTitle}>Basic Modal</h3>
          <div className={classes.modalHeaderIcon} onClick={onClose}>
            <IoMdClose
              className={classes.closeButton}
              size={20}
              onClick={onclose}
            />
          </div>
        </div>
        <div className={classes.modalBody}>
          <form>
            <InputField
              id="name"
              name="name"
              type="text"
              value={formData.name}
              required={true}
              handleChange={handleChange}
              labelName="Name"
            />
            <InputField
              id="mail"
              name="mail"
              type="email"
              value={formData.mail}
              required={true}
              handleChange={handleChange}
              labelName="Email"
              mail={true}
            />
            <InputField
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              required={true}
              handleChange={handleChange}
              labelName="Phone"
            />
            <InputField
              id="site"
              name="site"
              type="text"
              value={formData.site}
              required={true}
              handleChange={handleChange}
              labelName="Website"
            />
          </form>
        </div>
        <div className={classes.modalFooter}>
          <button className={classes.btn} onClick={onClose}>
            Cancel
          </button>
          <button
            onClick={confirmHandler}
            className={`${classes.btn} ${classes.btnPrimary}`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
