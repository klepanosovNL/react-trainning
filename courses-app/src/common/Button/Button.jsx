export const Button = ({ name, type, handleClick }) => {
	return (
		<button type={type || ''} onClick={handleClick}>
			{name}
		</button>
	);
};
