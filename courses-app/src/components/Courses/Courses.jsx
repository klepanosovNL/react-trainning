import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CreateCourse } from '../CreateCourse/CreateCourse';

export const Courses = ({
	allCourses,
	handleRemove,
	isAuth,
	modalIsVisible,
	navigate,
	setVisible,
}) => {
	return (
		<>
			<nav>
				{isAuth && (
					<>
						<SearchBar />
						<Button name='new course' />
					</>
				)}
			</nav>
			{modalIsVisible && (
				<CreateCourse navigate={navigate} setVisible={setVisible} />
			)}
			<CourseCard allCourses={allCourses} handleRemove={handleRemove} />;
		</>
	);
};
