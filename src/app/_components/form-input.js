export const FormInput = (props) => {
  const { error, value, inputTag, handleChange, name } = props;
  return (
    <div>
      <p>{inputTag} *</p>
      <input
        placeholder={inputTag}
        onChange={handleChange}
        name={name}
        value={value}
      ></input>
      {error && (
        <div style={{ color: "red" }}>
          {inputTag} cannot contain special characters or numbers.
        </div>
      )}
    </div>
  );
};
