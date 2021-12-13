import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './course-info_module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../Api/Api';

export const CourseInfo = () => {
	const currentCourse = useSelector(
		(state) => state.courseReducer.currentCourse
	);

	const dispatch = useDispatch();
	const id = useParams().id.substring(1);

	useEffect(() => {
		dispatch(getCourseById(id));
	}, [id]);

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
