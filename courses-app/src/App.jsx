import React, { useState, useEffect } from 'react';
import './main_module.scss';
import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { Welcome } from './components/Welcome/Welcome';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Routes, Route } from 'react-router-dom';
import { RegistrationFrom } from './components/Registration/Registration';
import { LoginFrom } from './components/Login/Login';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCourses,
	fetchAuthors,
	deleteCourseById,
} from './components/Api/Api';

export default function App() {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.courseReducer.courses);
	const authors = useSelector((state) => state.authorReducer.authors);
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const userName = useSelector((state) => state.userReducer.name);
	const [modalIsVisible, setVisible] = useState(false);
	let navigate = useNavigate();

	const handleRemove = (courseId) => {
		dispatch(deleteCourseById(courseId));
	};

	useEffect(() => {
		dispatch(fetchCourses());
		// dispatch(fetchAuthors());
	}, [dispatch]);

	return (
		<div className='wrapper'>
			<Header navigate={navigate} isAuth={isAuth} userName={userName} />
			<main className='main'>
				<Routes>
					<Route path='/' exact element={<Welcome isAuth={isAuth} />}></Route>
					<Route
						path='/courses'
						element={
							<Courses
								isAuth={isAuth}
								allCourses={courses}
								handleRemove={handleRemove}
								modalIsVisible={modalIsVisible}
								navigate={navigate}
								setVisible={setVisible}
							/>
						}
					></Route>

					<Route path='/courseInfo/:id' element={<CourseInfo />} />
					<Route
						path='/registration/'
						element={<RegistrationFrom navigate={navigate} />}
					/>
					<Route path='/login/' element={<LoginFrom navigate={navigate} />} />
				</Routes>
			</main>
		</div>
	);
}
