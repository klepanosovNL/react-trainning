import { Link } from 'react-router-dom';

export const Welcome = ({ isAuth }) => {
	return (
		<>
			{isAuth ? (
				<>
					<span>Ну ты красачик, дуй к курсам</span>
					<Link to='/courses/'>дую к курсам</Link>
				</>
			) : (
				<span>Урод, иди логинься, а то хер тебе вместо курсов</span>
			)}
		</>
	);
};
