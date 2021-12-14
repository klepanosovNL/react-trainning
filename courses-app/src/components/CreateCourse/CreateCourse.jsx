import { Button } from '../../common/Button/Button';
import React, { useState } from 'react';
import { Input } from '../../common/Input/Input';
import './create-course-form_module.scss';
import { useDispatch } from 'react-redux';
import { addCourse } from '../Api/Api';

export const CreateCourse = ({ navigate, setVisible }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authors, setAuthors] = useState('');
	const [duration, setDuration] = useState();
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(
			addCourse({
				title,
				description,
				authors,
				duration,
			})
		);

		navigate('/courses/');
		setVisible(false);
	};

	return (
		<form onSubmit={submitHandler} className='create-course-form'>
			<label>
				<strong>title</strong>
			</label>
			<Input
				name='title'
				placeholder='title...'
				value={title || ''}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<label>
				<strong>description</strong>
			</label>
			<Input
				name='description'
				placeholder='description..'
				value={description || ''}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<label>
				<strong>author</strong>
			</label>
			<Input
				name='authors'
				placeholder='author'
				value={authors || ''}
				onChange={(e) => {
					setAuthors(e.target.value);
				}}
			/>
			<label>
				<strong>duration</strong>
			</label>
			<Input
				name='duration'
				placeholder='duration'
				value={duration || ''}
				onChange={(e) => {
					setDuration(e.target.value);
				}}
				type='number'
			/>
			<Button name='save' type='submit' />
		</form>
	);
};
