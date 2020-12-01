import React from "react";

// import "./form-input.styles.scss";

import { FormInputContainer, Input } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  // We're going to bubble up any change on the component via handleChange

  if (!label) {
    console.warn(
      "FormInput component was not passed a label. Inputs should have labels for accessibility. For more info see https://www.w3.org/WAI/tutorials/forms/labels/"
    );
  }

  return (
    <FormInputContainer>
      <Input onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </FormInputContainer>
  );
};

export default FormInput;
