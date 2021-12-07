import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Link } from 'react-router-dom';
import { postResourse } from '../Api/Api';

export const RegistrationFrom = ({ navigate }) => {
	const submitForm = (event) => {
		event.preventDefault();

		const { name, password, email } = event.target;
		const user = {
			name: name.value,
			password: password.value,
			email: email.value,
		};

		navigate('/login/');

		// postResourse('http://localhost:3000/register', user);
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
			<Input name='password' type='password' />
			<Button type='submit' name='registration' />
			<Link to='/login/'>Login</Link>
		</form>
	);
};
