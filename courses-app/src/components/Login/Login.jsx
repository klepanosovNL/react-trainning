import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import './login_module.scss';
import { useDispatch } from 'react-redux';
import { login } from '../Api/Api';

export const LoginFrom = ({ navigate }) => {
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const { password, email } = e.target;

		dispatch(
			login({
				email: email.value,
				password: password.value,
			})
		);

		// setLogedIn(true);
		navigate('/courses/');
	};

	return (
		<form onSubmit={onSubmitHandler} className='login-form'>
			<div>Login</div>
			<label>
				<strong>Email</strong>
			</label>
			<Input type='email' name='email' />
			<label>
				<strong>Passwords</strong>
			</label>
			<Input name='password' type='password' />
			<Button type='submit' name='login' />
			<Link to='/registration/'>Registration</Link>
		</form>
	);
};
