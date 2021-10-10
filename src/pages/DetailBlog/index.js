import React from 'react';
import { RegisterBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';
import './detailBlog.scss';
import {useHistory} from 'react-router-dom';

const DetailBlog = () => {
	const history = useHistory();
	return (
		<div className="detail-blog-wrapper">
			<img src={RegisterBg} className="img-cover" alt="thumb" />
			<p className="blog-title">Title Blog</p>
			<p className="blog-author">Author Blog</p>
			<p className="blog-body">Body Blog</p>
			<Gap height={20} />
			<Link title="Kembali ke Home" onClick={() => history.push('/')} />
		</div>
	)
}

export default DetailBlog