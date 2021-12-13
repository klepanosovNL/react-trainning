import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import './registration_module.scss';
import { useDispatch } from 'react-redux';
import { registration } from '../Api/Api';

export const RegistrationFrom = ({ navigate }) => {
	const dispatch = useDispatch();

	const submitForm = (e) => {
		e.preventDefault();

		const { name, password, email } = e.target;

		dispatch(
			registration({
				name: name.value,
				email: email.value,
				password: password.value,
			})
		);

		navigate('/login/');
	};

	return (
		<form onSubmit={submitForm} className='registration-form'>
			<div>Registration</div>
			<label>
				<strong>Name</strong>
			</label>
			<Input name='name' />
			<label>
				<strong>Email</strong>
			</label>
			<Input type='email' name='email' />
			<label>
				<strong>Passwords</strong>
			</label>
			<Input name='password' />
			<Button type='submit' name='registration' />
			<Link to='/login/'>Login</Link>
		</form>
	);
};
