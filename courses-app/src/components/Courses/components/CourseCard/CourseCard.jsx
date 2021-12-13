import { Link } from 'react-router-dom';
import './course-card_module.scss';

export const CourseCard = ({ allCourses, handleRemove }) => {
	return (
		<ul>
			{allCourses.map(
				(
					{ title, description, authors, duration, creationDate, id },
					index
				) => (
					<li className='course-card__item' id={id} key={index}>
						<div
							className='course-card__remove'
							onClick={() => handleRemove(id)}
						>
							X
						</div>
						<div className='course-card__cell'>
							<strong>{title}</strong>
							<div>{description}</div>
						</div>
						<div className='course-card__cell'>
							<div>
								<div>
									<strong>author</strong>
									<div>{authors}</div>
								</div>
								<div>
									<strong>duration</strong>
									<div>{`${Math.floor(+duration / 60)}:${+duration % 60}`}</div>
								</div>
								<div>
									<strong>created</strong>
									<div>{creationDate}</div>
								</div>
							</div>
							<Link to={`/courseInfo/:${id}`}>Show course</Link>
						</div>
					</li>
				)
			)}
		</ul>
	);
};
