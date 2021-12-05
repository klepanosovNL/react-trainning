import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Link } from 'react-router-dom';

export const LoginFrom = ({ setLogedIn, navigate }) => {
	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '500px',
		margin: '0 auto',
		width: '100%',
		border: '2px solid yellow',
		padding: '20px',
		boxSizing: 'border-box',
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		setLogedIn(true);
		navigate('/courses/');
	};

	return (
		<form onSubmit={onSubmitHandler} style={formStyles}>
			<div>Login</div>
			<label>
				<strong>Email</strong>
			</label>
			<Input type='email' name='password' />
			<label>
				<strong>Passwords</strong>
			</label>
			<Input name='password' type='password' />
			<Button type='submit' name='login' />
			<Link to='/registration/'>Registration</Link>
		</form>
	);
};
