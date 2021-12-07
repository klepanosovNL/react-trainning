import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import './login_module.scss';

export const LoginFrom = ({ setLogedIn, navigate }) => {
	const onSubmitHandler = (event) => {
		event.preventDefault();

		setLogedIn(true);
		navigate('/courses/');
	};

	return (
		<form onSubmit={onSubmitHandler} className='login-form'>
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
