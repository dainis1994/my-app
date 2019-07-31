import React from "react";

import './Profile.scss';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className='profile'>
			<div className='carousel'>
				<img width="100%" src="http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" alt=""/>
			</div>

			<div className="body">
				<div>
					ava + descriptions
				</div>

				<MyPosts/>
			</div>
		</div>
	);
};

export default Profile;
