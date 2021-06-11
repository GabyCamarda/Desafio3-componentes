import React from 'react';

const btnStyles = {
	fontSize: 20,
	backgroundColor: 'black',
	color: 'white',
	margin: 10,
};

function BtnComponent(props) {
	return <button style={btnStyles}>{props.title}</button>;
}

export default BtnComponent;
