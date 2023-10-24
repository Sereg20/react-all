import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
    const dataPointValue = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {dataPoints.map(item => 
                <ChartBar 
                    key={item.label} 
                    value={item.value} 
                    maxValue={totalMax} 
                    label={item.label}/>
            )}
        </div>
    )
};

export default Chart;