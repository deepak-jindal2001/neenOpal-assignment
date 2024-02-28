import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import classes from "./modal.module.css";

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
      [name]: value.trim(),
    }));
  };

  const confirmHandler = () => {
    for (const prop in formData) {
      if (formData[prop] === "") {
        return;
      }
    }
    if (!formData.mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      return;
    }
    formData.site = "https://" + formData.site;
    onConfirm(userDetail.id, formData);
    onClose();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal} ref={containerRef}>
        <div className={classes.modal_header}>
          <h3 className={classes.modal_header_title}>Basic Modal</h3>
          <div className={classes.modal_header_icon} onClick={onClose}>
            <IoMdClose
              className={classes.closeButton}
              size={20}
              onClick={onclose}
            />
          </div>
        </div>
        <div className={classes.modal_body}>
          <form>
            <div
              className={`${classes.form_group} ${
                !formData.name ? classes.has_error : ""
              }`}
            >
              <label htmlFor="name" className={classes.label}>
                <div className={classes.label_prefix}>*</div>
                <div className={classes.label_name}>Name :</div>
              </label>
              <div className={classes.input_group}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
                {!formData.name && (
                  <div className={classes.helper_text}>
                    This field is required
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${classes.form_group} ${
                !formData.mail ||
                !formData.mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
                  ? classes.has_error
                  : ""
              }`}
            >
              <label htmlFor="email" className={classes.label}>
                <div className={classes.label_prefix}>*</div>
                <div className={classes.label_name}>Email :</div>
              </label>
              <div className={classes.input_group}>
                <input
                  type="text"
                  id="email"
                  name="mail"
                  value={formData.mail}
                  required
                  onChange={handleChange}
                />
                {!formData.mail && (
                  <div className={classes.helper_text}>
                    This field is required
                  </div>
                )}
                {formData.mail &&
                  !formData.mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && (
                    <div className={classes.helper_text}>Invalid email</div>
                  )}
              </div>
            </div>
            <div
              className={`${classes.form_group} ${
                !formData.phoneNumber ? classes.has_error : ""
              }`}
            >
              <label htmlFor="phoneNumber" className={classes.label}>
                <div className={classes.label_prefix}>*</div>
                <div className={classes.label_name}>Phone :</div>
              </label>
              <div className={classes.input_group}>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  required
                  onChange={handleChange}
                />
                {!formData.phoneNumber && (
                  <div className={classes.helper_text}>
                    This field is required
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${classes.form_group} ${
                !formData.site ? classes.has_error : ""
              }`}
            >
              <label htmlFor="site" className={classes.label}>
                <div className={classes.label_prefix}>*</div>
                <div className={classes.label_name}>Website :</div>
              </label>
              <div className={classes.input_group}>
                <input
                  type="text"
                  id="site"
                  name="site"
                  value={formData.site}
                  required
                  onChange={handleChange}
                />
                {!formData.site && (
                  <div className={classes.helper_text}>
                    This field is required
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className={classes.modal_footer}>
          <button className={classes.btn} onClick={onClose}>
            Cancel
          </button>
          <button
            onClick={confirmHandler}
            className={`${classes.btn} ${classes.btn_primary}`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
