import * as React from 'react';


const HomePage = () => {
	var rows: [number, string][] = [];
	for (let x=1; x<100; x++) {
		rows.push([x,'-']);
	}
	return (
		<div>
			HomePage
			{rows.map(([index, item]) => (
				<p key={index}>{item}</p>
			))}
		</div>
	);
}

export default HomePage;
