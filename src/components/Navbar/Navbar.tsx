import React from 'react';

import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div>
				<a className="item" href="#a">Profile</a>
			</div>

			<div>
				<a className="item" href="#a">Messages</a>
			</div>

			<div>
				<a className="item" href="#a">News</a>
			</div>

			<div>
				<a className="item" href="#a">Music</a>
			</div>

			<div>
				<a className="item" href="#a">Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;
