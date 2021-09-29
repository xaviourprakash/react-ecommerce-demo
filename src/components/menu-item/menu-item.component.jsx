/** @format */
import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}></div>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='sub-title'>SHOP NOW</span>
			</div>
		</div>
	);
};

/*
	withRouter is a higher order component that will pass closest route's match,
	current location, and history props to the wrapped component whenever it renders.
	Simply it connects component to the router.
*/

export default withRouter(MenuItem);
