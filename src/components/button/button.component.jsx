import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  // map returned given the buttonType
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// whatever things we want to put in our button component anywhere in code
const Button = ({ children, buttonType, ...otherProps }) => {
  console.log(`Children: ${children}`);
  console.log(`Button type: ${buttonType}`);
  console.log(`Other Props: ${otherProps}`);
  console.log(otherProps);
  const CustomButton = getButton(buttonType);

  console.log(CustomButton);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
