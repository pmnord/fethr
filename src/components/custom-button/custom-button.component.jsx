import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, className, ...props }) => (
  <CustomButtonContainer className={`custom-button ${className}`} {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
