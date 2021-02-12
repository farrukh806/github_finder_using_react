import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}
	static propTypes = {
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		repos: PropTypes.array.isRequired,
		getUser: PropTypes.func.isRequired,
		getUserRepos: PropTypes.func.isRequired,
	};
	render() {
		const {
			name,
			company,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;
		const { loading, repos } = this.props;
		if (loading) return <Spinner />;
		return (
			<Fragment>
				<Link to='/' className='btn btn-inline'>
					Back to Search
				</Link>
				Hirebale:{''}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-times-circle text-danger' />
				)}
				<div className='card'>
					<div className='text-center'>
						<img
							src={avatar_url}
							alt='profile-img'
							className='round-img'
							style={{ width: '150px' }}
						/>
						<h1>{name}</h1>
						<p>Location:{location}</p>
					</div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url} className='text-center mt-3'>
						Visit Github Profile
					</a>
					<ul></ul>
					<li>
						{login && (
							<Fragment>
								<strong>Username:</strong>
								{login}
							</Fragment>
						)}
					</li>
					<li>
						{company && (
							<Fragment>
								<strong>Company:</strong>
								{company}
							</Fragment>
						)}
					</li>
					<li>
						{blog && (
							<Fragment>
								<strong>Blog:</strong>
								{blog}
							</Fragment>
						)}
					</li>
				</div>
				<div className='card flex-container'>
					<p>Following:{following}</p>
					<p>Followers:{followers}</p>
					<p>Public Repos:{public_repos}</p>
					<p>Public Gists:{public_gists}</p>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
}

export default User;
