import { CourseCard } from './components/CourseCard/CourseCard';

export const Courses = ({ allCourses, handleRemove }) => {
	return <CourseCard allCourses={allCourses} handleRemove={handleRemove} />;
};
