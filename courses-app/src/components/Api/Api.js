import {
	coursesLoaded,
	addNewCourse,
	getCourse,
	deleteCourse,
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

export function getCourseById(id) {
	return (dispatch) => {
		const getResource = async (url) => {
			const response = await fetch(url);
			const data = await response.json();
			const course = data.result;
			return course;
		};

		getResource(`http://localhost:3000/courses/${id}`).then((course) => {
			dispatch(getCourse(course));
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
			dispatch(userRegistration(user));
		});
	};
}

export function login(result) {
	return (dispatch) => {
		const addResource = async (url) => {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(result),
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
			});

			result = await response.json();
			return result.user;
		};

		addResource('http://localhost:3000/login').then((user) => {
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

export function deleteCourseById(id) {
	return (dispatch, getState) => {
		const addResource = async (url) => {
			const result = await fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					accept: 'application/json',
				},
				body: JSON.stringify({ id }),
			});
		};

		addResource(`http://localhost:3000/courses/${id}`).then(() => {
			const courses = getState().courseReducer.courses.filter((course) => {
				return course.id !== id;
			});

			dispatch(deleteCourse(courses));
		});
	};
}
