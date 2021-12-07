import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import './header_module.scss';

export const Header = ({ isLogedIn, navigate, setLogedIn }) => {
	return (
		<div className='header'>
			<Logo />
			{isLogedIn ? (
				<>
					<div className='header__user-name'>Привет, Мыкыта</div>
					<Button
						name='Logout'
						handleClick={() => {
							setLogedIn(true);
						}}
					/>
				</>
			) : (
				<Link className='header__signin-btn' to='/registration'>
					sign In
				</Link>
			)}
		</div>
	);
};
