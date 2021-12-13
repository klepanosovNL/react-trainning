import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './course-info_module.scss';

// import { getResourse } from '../Api/Api';

export const CourseInfo = () => {
	const [currentCourse, setCurrentCourse] = useState({});

	const id = useParams().id.substring(1);
	console.log(useParams());

	// useEffect(() => {
	// 	getResourse(`http://localhost:3000/courses/${id}`).then((response) =>
	// 		setCurrentCourse(response.result)
	// 	);
	// }, [id]);

	return (
		<div className='course-info__container'>
			<Link to='/courses/' className='course-info__back-btn'>
				back
			</Link>
			<div className='course-info__title'>{currentCourse.title}</div>
			<div className='course-info__container-cell'>
				<div className='course-info__cell'>description</div>
				<div className='course-info__cell'>
					<label>
						<strong>id</strong>
					</label>
					<div>{currentCourse.id}</div>
					<label>
						<strong>duration</strong>
					</label>
					<div>{currentCourse.duration}</div>
					<label>
						<strong>author</strong>
					</label>
					<div>{currentCourse.authors}</div>
					<label>
						<strong>created</strong>
					</label>
					<div>{currentCourse.creationDate}</div>
				</div>
			</div>
		</div>
	);
};
