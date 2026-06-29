function Input({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default Input;
