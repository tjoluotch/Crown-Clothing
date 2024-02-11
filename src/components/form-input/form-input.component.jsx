import "./form-input.styles.scss";

// passing props in
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* if label is present*/}
      {/* if other props have a length greater than zero append the 'shrink' class 
    otherwise just keep the empty string */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
