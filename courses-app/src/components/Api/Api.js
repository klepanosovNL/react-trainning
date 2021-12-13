import {
	coursesLoaded,
	addNewCourse,
} from '../../store/courses/actionCreators';
import { authorsLoaded } from '../../store/authors/actionCreators';
import { userRegistration, userLogIn } from '../../store/user/actionCreators';

export function fetchCourses() {
	return (dispatch) => {
		const getResource = async (url) => {
			const response = await fetch(url);
			const data = await response.json();
			const courses = data.result;
			return courses;
		};

		getResource('http://localhost:3000/courses/all').then((courses) => {
			dispatch(coursesLoaded(courses));
		});
	};
}

export function addCourse(course) {
	return (dispatch, getState) => {
		const addResource = async (url) => {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(course),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
			});

			course = await response.json();
			return course;
		};

		addResource('http://localhost:3000/courses/add').then((course) => {
			const courses = getState().courseReducer.courses;
			courses.push(course);
			dispatch(addNewCourse(courses));
		});
	};
}

export function registration(user) {
	return (dispatch) => {
		const addResource = async (url) => {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
			});

			user = await response.json();
			return user;
		};

		addResource('http://localhost:3000/register').then((user) => {
			// const courses = getState().courseReducer.courses;
			// courses.push(course);
			dispatch(userRegistration(user));
		});
	};
}

export function login(user) {
	return (dispatch) => {
		const addResource = async (url) => {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
			});

			user = await response.json();
			return user;
		};

		addResource('http://localhost:3000/login').then((user) => {
			// const courses = getState().courseReducer.courses;
			// courses.push(course);
			dispatch(userLogIn(user));
		});
	};
}

export function fetchAuthors() {
	return (dispatch) => {
		const getResource = async (url) => {
			const response = await fetch(url);
			const data = await response.json();
			const authors = data.result;
			return authors;
		};

		getResource('http://localhost:3000/authors/all').then((authors) => {
			dispatch(authorsLoaded(authors));
		});
	};
}
