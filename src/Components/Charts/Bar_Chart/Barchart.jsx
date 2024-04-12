import { Bar } from "react-chartjs-2";
import { barChartData } from "../../../Data/Data";

import {
	Chart as chartjs,
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

chartjs.register(
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
);

const BarChart = () => {
	const oprions = {
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<>
			<div className='w-[560px] h-[530px] rounded-xl shadow-2xl  bg-white overflow-hidden'>
				<Bar data={barChartData} options={oprions} />
			</div>
		</>
	);
};

export default BarChart;
