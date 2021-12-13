import { ADD_COURSE, COURSES_LOADED } from './actionTypes';

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
