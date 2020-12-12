import React from "react";
import {FormContainer, InputContainer, FormLabel} from "./form-input.styles";

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <FormContainer>
      <InputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormLabel
          className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </FormLabel>
      ) : null}
    </FormContainer>
  );
};

export default FormInput;
