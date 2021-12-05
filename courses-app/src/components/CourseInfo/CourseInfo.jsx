import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getResourse } from '../Api/Api';

export const CourseInfo = () => {
	const containerStyles = {
		display: 'flex',
		flexDirection: 'column',
		border: '2px solid red',
		padding: '20px',
		position: 'relative',
	};

	const backBtnStyles = {
		position: 'absolute',
		left: '0',
		top: '0',
	};

	const titleStyles = {
		textAlign: 'center',
		fontSize: '24px',
		marginBottom: '15px',
	};

	const containerCellStyles = {
		display: 'flex',
	};

	const cellStyles = {
		width: '50%',
	};

	const [currentCourse, setCurrentCourse] = useState({});

	const id = useParams().id.substring(1);
	console.log(useParams());

	useEffect(() => {
		getResourse(`http://localhost:3000/courses/${id}`).then((response) =>
			setCurrentCourse(response.result)
		);
	}, [id]);

	return (
		<div style={containerStyles}>
			<Link to='/courses/' style={backBtnStyles}>
				back
			</Link>
			<div style={titleStyles}>{currentCourse.title}</div>
			<div style={containerCellStyles}>
				<div style={cellStyles}>description</div>
				<div style={cellStyles}>
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
