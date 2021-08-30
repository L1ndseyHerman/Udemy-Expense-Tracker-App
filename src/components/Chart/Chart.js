import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

//  If the label is unique, like "Jan", "Feb", etc, can use it as the key!
const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //  The maxValue should be the largest value out of all 12 months.
    //  This needs ... bec of something abt needs a comma-seperated list, not an array.
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (
        <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} 
        />))}
    </div>
};

export default Chart;