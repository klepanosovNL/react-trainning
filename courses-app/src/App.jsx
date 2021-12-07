import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/Courses/components/SearchBar/SearchBar';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Courses } from './components/Courses/Courses';
import { Welcome } from './components/Welcome/Welcome';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { getResourse } from './components/Api/Api';
import { Routes, Route } from 'react-router-dom';
import { RegistrationFrom } from './components/Registration/Registration';
import { LoginFrom } from './components/Login/Login';
import { Button } from './common/Button/Button';
import { useNavigate } from 'react-router';

export default function App() {
	const mainStyles = {
		padding: '10px 20px',
		border: '2px solid green',
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
	};

	useEffect(() => {
		getResourse('http://localhost:3000/courses/all').then((response) =>
			setAllCourses(response.result)
		);
	}, []);

	const [newCourse, setNewCourse] = useState({});
	const [allCourses, setAllCourses] = useState([]);
	const [modalIsVisible, setVisible] = useState(false);
	const [searchValue, setSearchInput] = useState('');
	const [isLogedIn, setLogedIn] = useState(false);
	let navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		setAllCourses((prev) => [newCourse, ...prev]);
		setNewCourse({});
		setVisible(!modalIsVisible);
		navigate('/courses/');
	};

	const handleRemove = (courseId) => {
		setAllCourses((prev) => prev.filter((course) => course.id !== courseId));
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setNewCourse((prev) => ({
			...prev,
			[name]: value,
			id: allCourses.length,
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
		navigate('/addCourse/');
	};

	return (
		<div className='wrapper'>
			<Header
				navigate={navigate}
				isLogedIn={isLogedIn}
				setLogedIn={setLogedIn}
			/>
			<main style={mainStyles}>
				<nav>
					<SearchBar searchItems={searchItems} />
					<Button name='new course' handleClick={handleClick} />
				</nav>
				{modalIsVisible && (
					<CreateCourse
						handleSubmit={handleSubmit}
						newCourse={newCourse}
						handleChange={handleChange}
					/>
				)}
				<Routes>
					<Route path='/' exact element={<Welcome />}></Route>
					<Route
						path='/courses'
						element={
							<Courses allCourses={allCourses} handleRemove={handleRemove} />
						}
					></Route>

					<Route path='/courseInfo/:id' element={<CourseInfo />} />
					<Route
						path='/registration/'
						element={<RegistrationFrom navigate={navigate} />}
					/>
					<Route
						path='/login/'
						element={<LoginFrom setLogedIn={setLogedIn} navigate={navigate} />}
					/>
				</Routes>
			</main>
		</div>
	);
}
