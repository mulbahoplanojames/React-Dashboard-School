import { Line } from "react-chartjs-2";
import { lineChartData } from "../../../Data/Data";

import {
	Chart as chartjs,
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

const LineChart = () => {
	const options = { responsive: true, maintainAspectRatio: false };

	return (
		<>
			<div className='w-[545px] h-[530px] rounded-xl shadow-2xl  bg-white overflow-hidden'>
				<Line options={options} data={lineChartData} />
			</div>
		</>
	);
};

export default LineChart;
