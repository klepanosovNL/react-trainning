import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import './header_module.scss';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/user/actionCreators';

export const Header = ({ navigate, isAuth, userName }) => {
	const dispatch = new useDispatch();
	const handleClick = () => {
		dispatch(userLogout());
		navigate('/');
	};

	return (
		<div className='header'>
			<Logo />
			{isAuth ? (
				<>
					<div className='header__user-name'>Привет, {userName}</div>
					<Button name='Logout' handleClick={handleClick} />
				</>
			) : (
				<Link className='header__signin-btn' to='/registration'>
					sign In
				</Link>
			)}
		</div>
	);
};
