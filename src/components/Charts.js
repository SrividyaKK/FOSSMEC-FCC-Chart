import React from 'react';
import Chart from './Chart';

const Charts = ({ chartData }) => {
	return (
		<div>
			{
	  			chartData.map((user, i) => {
	  				return (
	  					<div className='tc bg-white dib br3 pa3 ma2 bw2 shadow-4 grow mt3'>
	  						<Chart chartData={chartData[i]}/>
	  					</div>
	  				);
	  			})
	  		}
	  	</div>
	);
}

export default Charts;