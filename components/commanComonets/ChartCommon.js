import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
} from 'chart.js';

const ChartCommon = (props) => {
    const push   = props?.push;
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Filler,
        Legend,
        {
            id: 'customSpacingLegend',
            beforeInit(chart) {
                // Get reference to the original fit function
                const originalFit = chart.legend.fit;

                // Override the fit function
                chart.legend.fit = function fit() {
                    // Call original function and bind scope in order to use `this` correctly inside it
                    originalFit.bind(chart.legend)();
                    // Change the height as suggested in another answers
                    this.height += 20;
                }
            }
        }
    );
    return (
        <div className={props.classes} onClick={push} style={{"cursor":'pointer'}}>
                <div className={props?.dataId === "1" ? 'chartsOuter' : 'graphContainer'}>
                    {props.chartType === "Line" && <Line options={props.options} data={props.data} />}
                    {props.chartType === "Bar" && <Bar options={props.options} data={props.data} />}
                    {props.chartType === "Doughnut" && <Doughnut options={props.options} data={props.data} />}
                </div>
            </div>
       
    )
}

export default ChartCommon