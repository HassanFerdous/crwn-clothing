import React from 'react';
import MenuItem from '../MenuItem';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import { connect } from 'react-redux';

import './directory-menu.scss';

const DirectoryMenu = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ title, imageUrl, size, id, linkUrl }) => {
				return <MenuItem key={id} title={title} img={imageUrl} size={size} link={linkUrl} />;
			})}
		</div>
	);
};

const mapDispatchToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapDispatchToProps)(DirectoryMenu);
