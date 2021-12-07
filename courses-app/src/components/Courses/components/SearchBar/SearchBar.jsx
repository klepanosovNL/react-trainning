import { Input } from '../../../../common/Input/Input';

export const SearchBar = ({ searchItems }) => {
	return (
		<Input
			name='searchInput'
			onChange={(e) => searchItems(e.target.value)}
			placeholder='Search...'
		/>
	);
};
