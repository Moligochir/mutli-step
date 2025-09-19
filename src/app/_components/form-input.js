export const FormInput = (props) => {
  const { error, value, inputTag, handleChange, name, type } = props;
  return (
    <div>
      <p>{inputTag} *</p>
      <input
        placeholder={inputTag}
        onChange={handleChange}
        name={name}
        value={value}
        type={type}
      ></input>
      {<div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
