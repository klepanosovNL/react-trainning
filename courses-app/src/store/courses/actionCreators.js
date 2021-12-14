import {
	ADD_COURSE,
	COURSES_LOADED,
	GET_COURSE,
	DELETE_COURSE,
} from './actionTypes';

export const coursesLoaded = (newCourses) => {
	return {
		type: COURSES_LOADED,
		courses: newCourses,
	};
};

export const addNewCourse = (courses) => {
	return {
		type: ADD_COURSE,
		courses,
	};
};

export const getCourse = (course) => {
	return {
		type: GET_COURSE,
		course,
	};
};

export const deleteCourse = (courses) => {
	return {
		type: DELETE_COURSE,
		courses,
	};
};
