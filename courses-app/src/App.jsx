import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Button from './common/Button/Button';
import CourseCard from './components/Courses/components/CourseCard/CourseCard';
import CreateCourse from './components/CreateCourse/CreateCourse';

export default function App() {
	const mainStyles = {
		padding: '10px 20px',
		border: '2px solid green',
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
	};

	const coursesByDefault = [
		{
			title: 'Java',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.`,
			author: 'Mikita Klepanosau',
			duration: 72,
			date: '14.09.1997',
			id: '0',
		},
		{
			title: 'React',
			description: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.`,
			author: 'Mikita Klepanosau',
			duration: 33,
			date: '14.09.1997',
			id: '1',
		},
	];

	const [newCourse, setNewCourse] = useState({});
	const [allCourses, setAllCourses] = useState(coursesByDefault);
	const [modalIsVisible, setVisible] = useState(false);
	const [searchValue, setSearchInput] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		setAllCourses((prev) => [newCourse, ...prev]);
		setNewCourse({});
		setVisible(!modalIsVisible);
	};

	const handleRemove = (courseId) => {
		setAllCourses((prev) => prev.filter((course) => course.id !== courseId));
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setNewCourse((prev) => ({
			...prev,
			[name]: value,
			id: allCourses.length.toString(),
		}));
	};

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		allCourses.filter(
			(element) => element.title.toLowerCase() === searchValue.toLowerCase()
		);

		setAllCourses(allCourses);
	};

	const handleClick = () => {
		setVisible(!modalIsVisible);
	};

	return (
		<div className='wrapper'>
			<Header />
			<main style={mainStyles}>
				<nav>
					<SearchBar searchItems={searchItems} />
					<Button name='Add new course' handleClick={handleClick} />
				</nav>
				{modalIsVisible && (
					<CreateCourse
						handleSubmit={handleSubmit}
						newCourse={newCourse}
						handleChange={handleChange}
					/>
				)}

				<CourseCard allCourses={allCourses} handleRemove={handleRemove} />
			</main>
		</div>
	);
}
