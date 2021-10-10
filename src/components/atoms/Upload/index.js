import React from 'react';
import { RegisterBg } from '../../../assets';
import './upload.scss';

const Upload = () => {
	return (
		<div className="upload">
			<img src={RegisterBg} className="preview" alt="preview" />
			<input type="file" />
		</div>
	)
}

export default Upload