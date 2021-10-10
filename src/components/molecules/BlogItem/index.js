import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogitem.scss';
import { Button, Gap } from '../../atoms';
import {useHistory} from 'react-router-dom';

const BlogItem = () => {
	const history = useHistory();
	return (
		<div className="blog-item">
			<img src={RegisterBg} className="image-thumb" alt="post" />
			<div className="content-detail">
				<p className="title">Title Blog</p>
				<p className="author">Title Blog</p>
				<p className="body">Title Blog</p>
				<Gap height={20} />
				<Button title="View Detail" onClick={() => history.push('/detail-blog')} />
			</div>
		</div>

	)
}

export default BlogItem;