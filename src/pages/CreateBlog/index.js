import React from 'react';
import { Input, Button, Gap, Link, Upload, TextArea } from '../../components';
import './createBlog.scss';
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
	const history = useHistory();
	return (
		<div className="blog-post">
			<p className="title">Create New Blog Post</p>
			<Input label="Post Title" />
			<Upload />
			<TextArea />
			<Gap height={20} />
			<div className="button-action">
				<Button title="Save" />
			</div>
			<Gap height={20} />
			<Link title="Kembali" onClick={() => history.push('/')} />
			<Gap height={20} />
		</div>
	)
}

export default CreateBlog