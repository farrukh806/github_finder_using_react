import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ user: { avatar_url, login, html_url } }) {
	return (
		<div className='card'>
			<img
				src={avatar_url}
				className='round-img small text-center'
				alt='avatar_url'
			/>
			<h3 className='text-center'>{login}</h3>
			<Link className='text-center btn more-btn' to={`/user/${login}`}>
				More
			</Link>
		</div>
	);
}

UserItem.prototype = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
