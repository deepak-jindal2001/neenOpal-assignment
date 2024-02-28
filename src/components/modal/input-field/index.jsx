import { EMAIL_REGEX } from "../../../constants";

import classes from "./styles.module.css";

const InputField = ({
  id,
  name,
  type,
  handleChange,
  labelName,
  required,
  value,
  mail,
}) => {
  return (
    <div
      className={`${classes.formGroup} ${
        !value || (mail && !value.match(EMAIL_REGEX)) ? classes.hasError : ""
      }`}
    >
      <label htmlFor={id} className={classes.label}>
        <div className={classes.labelPrefix}>*</div>
        <div className={classes.labelName}>{`${labelName} :`}</div>
      </label>
      <div className={classes.inputGroup}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          required={required}
          onChange={handleChange}
        />
        {!value && (
          <div className={classes.helperText}>This field is required</div>
        )}
        {mail && value && !value.match(EMAIL_REGEX) && (
          <div className={classes.helperText}>Invalid email</div>
        )}
      </div>
    </div>
  );
};

export default InputField;
