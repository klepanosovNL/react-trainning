import './logo_module.scss';
import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link to='/'>
			<img
				alt='logo'
				className='logo'
				src='data:image/png;base64,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'
			></img>
		</Link>
	);
};
