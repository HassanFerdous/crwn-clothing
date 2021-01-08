import React from 'react';
import DirectoryMenu from '../../components/directory/DirectoryMenu';

class HomePage extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="home-page">
				<DirectoryMenu />
			</div>
		);
	}
}

export default HomePage;
