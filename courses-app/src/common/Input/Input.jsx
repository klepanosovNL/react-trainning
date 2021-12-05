export const Input = ({ placeholder, onChange, name, value, id, type }) => {
	return (
		<input
			onChange={onChange}
			name={name}
			value={value}
			placeholder={placeholder}
			id={id}
			type={type}
			required
		></input>
	);
};
