export default function Input({ placeholder, onChange, name, value }) {
	return (
		<input
			onChange={onChange}
			name={name}
			value={value}
			placeholder={placeholder}
		></input>
	);
}
