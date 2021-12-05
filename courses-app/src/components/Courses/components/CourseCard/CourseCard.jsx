import { Link } from 'react-router-dom';

export const CourseCard = ({ allCourses, handleRemove }) => {
	const courseCardStyles = {
		margin: '20px',
		border: '2px solid blue',
		display: 'flex',
		position: 'relative',
	};

	const courseCardCell = {
		width: '50%',
		padding: '20px',
	};

	const removeCourseStyles = {
		position: 'absolute',
		right: '0',
		backgroundColor: 'red',
		padding: '5px',
		borderRadius: '50%',
		height: '20px',
		width: '20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: 'bold',
		cursor: 'pointer',
	};

	return (
		<ul className='courses'>
			{allCourses.map(
				({ title, description, authors, duration, creationDate, id }) => (
					<li style={courseCardStyles} id={id} key={title}>
						<div style={removeCourseStyles} onClick={() => handleRemove(id)}>
							X
						</div>
						<div style={courseCardCell}>
							<strong className='course-card__title'>{title}</strong>
							<div className='course-card__description'>{description}</div>
						</div>
						<div style={courseCardCell}>
							<div className='course-card__add-info'>
								<div className='course-card__author'>
									<strong>author</strong>
									<div>{authors}</div>
								</div>
								<div className='course-card__duration'>
									<strong>duration</strong>
									<div>{`${Math.floor(+duration / 60)}:${+duration % 60}`}</div>
								</div>
								<div className='course-card__date'>
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
