import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { Link } from 'react-router-dom';

export const Header = ({ isLogedIn, navigate, setLogedIn }) => {
	const headerStyles = {
		display: 'flex',
		padding: '10px 20px',
		boxSizing: 'border-box',
		border: '2px solid red',
		backgroundColor: '#222222',
		alignItems: 'center',
	};

	const headerNameStyles = {
		color: 'green',
		fontWeight: 'bold',
		fontSize: '24px',
		margin: '0 25px',
	};

	const siginInStyles = {
		color: 'white',
	};

	return (
		<div style={headerStyles}>
			<Logo />
			{isLogedIn ? (
				<>
					<div style={headerNameStyles}>Привет, Мыкыта</div>
					<Button
						name='Logout'
						onClick={() => {
							console.log('sdsd');
						}}
					/>
				</>
			) : (
				<Link style={siginInStyles} to='/registration'>
					sign In
				</Link>
			)}
		</div>
	);
};
