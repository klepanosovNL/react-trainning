import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

export default function Header() {
	const headerStyles = {
		display: 'flex',
		padding: '10px 20px',
		boxSizing: 'border-box',
		border: '2px solid red',
		backgroundColor: '#222222',
		alignItems: 'center',
	};

	return (
		<div style={headerStyles}>
			<Logo />
			<div>Мыкыта</div>
			<Button name='Logout' />
		</div>
	);
}
