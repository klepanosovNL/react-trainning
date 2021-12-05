import { Button } from '../../common/Button/Button';
import React from 'react';
import { Input } from '../../common/Input/Input';

export const CreateCourse = ({ newCourse, handleSubmit, handleChange }) => {
	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '400px',
		position: 'absolute',
		width: '100%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%)',
		boxShadow: '0 0 50px 20px',
		backgroundColor: 'white',
		zIndex: '1',
	};

	return (
		<form onSubmit={handleSubmit} style={formStyles}>
			<label>
				<strong>title</strong>
			</label>
			<Input
				name='title'
				placeholder='title...'
				value={newCourse.title || ''}
				onChange={handleChange}
			/>
			<label>
				<strong>description</strong>
			</label>
			<Input
				name='description'
				placeholder='description..'
				value={newCourse.description || ''}
				onChange={handleChange}
			/>
			<label>
				<strong>author</strong>
			</label>
			<Input
				name='authors'
				placeholder='author'
				value={newCourse.authors || ''}
				onChange={handleChange}
			/>
			<label>
				<strong>duration</strong>
			</label>
			<Input
				name='duration'
				placeholder='duration'
				value={newCourse.duration || ''}
				onChange={handleChange}
				type='number'
			/>
			<Button name='save' type='submit' />
		</form>
	);
};
