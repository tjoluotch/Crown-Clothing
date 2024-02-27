import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

// passing props in
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* if label is present*/}
      {/* if other props have a length greater than zero append the 'shrink' class 
    otherwise just keep the empty string */}
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
